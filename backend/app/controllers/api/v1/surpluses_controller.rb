class Api::V1::SurplusesController < ApplicationController

  def index
    @surpluses = Surplus.all
    render json: @surpluses, status: 200
  end

	def show
		@surplus = Surplus.find(params[:id])
		render json: @surplus, status: 200
	end

	def create
		@surplus = Surplus.create(surplus_params)
		render json: @surplus, status: 200
	end

  def update
    @surplus = Surplus.find(params[:id])
    @surplus.update(surplus_params)
		render json: @surplus, status: 200
	end

	def destroy
		@surplus = Surplus.find(params[:id])
		@surplus.destroy
	end

  private

  def surplus_params
    params.require(:surplus).permit(:title, :description, :category, :units, :unit_category, :location, :available_date, :claim_by_date, :user_id, :organization_id)
  end

end
