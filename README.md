# Project Notes

Dear Engineering Team,

Here's my work for the client (in React/Redux, Rails, & PostgreSQL).

I was able to flesh out the following functionality in 5 hours:

0. Starting a tournament
1. Creating the players for the tournament
2. Recording match results & tracking when round is over
3. Starting a new round
4. Displaying winner of tournament

However, I was only able to allocate the final 50 minutes for debugging, so only (0) & (1) are currently working.

In the future, I would recommend setting more realistic expectations with the customer about lead-time. While a schema can be devised quickly and a backend and frontend fleshed out, the compressed amount of time does not allow for sufficient time to consider the cleanest ways to implement UI requirements.

For example, in creating players, the fastest solution was to have the tournament official type up the players' name in a `<textarea>` separated by commas. However, because of the timeframe, there is no error handling. In other words, if the official forgets one comma, a player is left out of the tournament. Additionally, the UI provides no way to undo this mistake (except a hard refresh) nor does it indicate the official ever made a mistake, as I did not have time to create a tournament board with players' names.

Beyond that, there are elements of the code that are superfluous (e.g. the RoundsController).

My strategy, given the task of working 5 hours straight and getting as many of the specifications done as possible, was to work slowly. Why? Because working quickly would be unsustainable over 5 hours, I would create infinitely more bugs, and I would be too exhausted to solve them. Additionally, I needed to prioritize which aspects of the project to complete first. Working fast would sacrifice this ability to prioritize.

Additionally, by working slowly, I have a better sense of how everything I've coded fits together, instead of losing track of everything I've produced.

## Areas for Refactoring

* __`MatchesController#update`__

makes 3 queries to the database; refactoring so this fetching is handled through the state on the frontend can eliminate the need for them

* __styling__

There is NONE.

* __error handling__

There is NONE.

* __possibly the state structure__

Certainly for players. I made an all_ids-by_ids delineation in `players/index.json.jbuilder` and never used it. Just used it, prioritizing more functionality to cleaner code given constrained time.

* __possibly the schema__

If I had more time to think things through... Matches have a `round_id` (misnomer) and a `tournament_id`, Rounds have a `round_number` and `tournament_id`, players have a `tournament_id`, and matches also have 2 player ids.

I chose a `round_number` attribute in the `rounds` table to make organizing the data for a tournament easier. The `round_id` in the `matches` table is NOT a foreign key, it is the same as the `round_number` in `rounds`. Bad naming on my part. Another bad name: _`loses`_ (not losses...) in the `players` table (to keep track of how many times a player has lost). Typo...

### * * *

In all, I'd stay that the time it will take to clean up suboptimal parts of this project will equal or exceed the time it would have taken to plot things out cleanly. However, I still did my best to write readable, simple code. You won't see too much hacky syntax, just the inefficient implementations I've pointed out.

Hopefully this clarity for the next engineer will reduce the time it takes them to grasp the codebase. That is the upside. The downside is--I am aware--someone who chose to work more quickly may have more functionality, although they may not write as clearly here in the project notes due to exhaustion.

I would argue that the slower approach has better long-term benefits even if you see less now.

Other than that, my regards to the team and please let me know if there's anything I can clarify in the code.

__Best,__

*English3000*
