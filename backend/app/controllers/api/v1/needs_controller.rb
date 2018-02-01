class Api::V1::NeedsController < ApplicationController

  def index
    @needs = Need.all
    render json: @needs, status: 200
  end

	def show
		@need = Need.find(params[:id])
		render json: @need, status: 200
	end

	def create
		@need = Need.create(need_params)
		render json: @need, status: 200
	end

  def update
    @need = Need.find(params[:id])
    @need.update(need_params)
		render json: @need, status: 200
	end

	def destroy
		@need = Need.find(params[:id])
		@need.destroy
	end

  private

  def need_params
    params.require(:need).permit(:title, :description, :category, :units, :unit_category, :location, :fulfill_by_date, :user_id, :organization_id)
  end

end
