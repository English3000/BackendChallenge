import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../Actions';

const mapStateToProps = ({ tournament, players }) => ({
  tournament_id: tournament.id,
  players
});

const mapDispatchToProps = dispatch => ({
  createPlayers: (playersString, tournament_id) => dispatch(Actions.createPlayers(playersString, tournament_id)),
  createMatches: (players, current_round) => dispatch(Actions.createMatches(players, current_round)),
  updateMatch: match => dispatch(Actions.updateMatch(match)), //non-RESTFUL
  createTournament: name => dispatch(Actions.createTournament(name))
});

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { round_complete: false,
                   current_round: 1,
                   tournament_complete: false,
                   tournament_id: null,
                   tournament_name: '',
                   playersString: '',
                   winner: '',
                   loser: '',
                   score: '' }; //score format needs to be validated
  }

  componentWillReceiveProps(newProps) {
    // if (!this.state.tournament_id) {
    //   this.setState({tournament_id: newProps.tournament_id});
    // }
    // console.log(newProps);

    if ( newProps.matches && Object.values(newProps.matches).every(match => match['finished?']) ) {
      this.setState({round_complete: true, current_round: this.state.current_round + 1});
    }
  }

  render() {
    const {players, tournament_id,
           updateMatch, createTournament, createPlayers, createMatches} = this.props;
    const {round_complete, tournament_name, playersString,
           winner, loser, score, current_round} = this.state;

    const winners = Object.values(players.by_id).filter(player => player.loses < 1); //I know, misspelled 'losses' early on
      //also, did the all_ids-by_id setup on backend but probably not needed

    // UI flow:  (0) If no tournament started, button to start one.
              // (1) Player sign-up [simplest UI, but very bug-prone for users]
              // (2) Display for current round & form to post final match results
              // (3) When round complete, hit button to start next one.
              // (4) When tournament complete...
    console.log('Id', !!tournament_id);
    //bug: tournament can be nameless
    return (
      !tournament_id ?
        <form>
          <input id='tournament-name'
                 onChange={event => this.setState({tournament_name: event.target.value})}/>
          <button onClick={() => createTournament({name: tournament_name})}>
            Start Tournament
          </button>
        </form> :


        !(players.all_ids.length > 0) ?
        <div id='player-signup'>
          {/* could check for commas here */}
          <textarea placeholder="List all players' names for the tournament,
                                 separated by commas."
                    onChange={event => this.setState({playersString: event.target.value})}></textarea>
          <button onClick={() => createPlayers({playersString, tournament_id})
                                   .then(allPlayers => {
                                     console.log(allPlayers);
                                     createMatches({
                                     players: Object.values(allPlayers.players.by_id),
                                     current_round});
                                     }
                                   )}>Sign Up Players
                                   {/* Object.values is sending object to backend instead of array */}
          </button>
        </div> :


        <div id='tournament'>
          <div id='tournament-screen'></div>
          { round_complete ? winners.length > 1 ?
            <button onClick={() => createMatches({players: winners, current_round})
                                     .then( () => this.setState({round_complete: false}) )}>
              Start Next Round</button> :

            <p>Congrats to {winners[0].name}!</p> :

            <form>
              <input id='winner'
                     onChange={event => this.setState({winner: event.target.value})}/>
              <input id='loser'
                     onChange={event => this.setState({loser: event.target.value})}/>
              <input id='score'
                     onChange={event => this.setState({score: event.target.value})}/>

              <button onClick={() => updateMatch({winner, loser, score, current_round})}>
                Submit Match
              </button>
            </form> }
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
