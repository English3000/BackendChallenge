class Api::TournamentsController < ApplicationController
  def create
    @tournament = Tournament.create(tourna_params)
    render json: @tournament
  end

  private
  def tourna_params
    params.require(:tournament).permit(:name, :id)
  end
end
