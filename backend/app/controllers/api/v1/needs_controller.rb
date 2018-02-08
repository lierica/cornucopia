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
    need_id = @need.id
		@need.destroy
    render json: { need_id: need_id, message: "need successfully destroyed" }, status: 200
	end

  private

  def need_params
    params.require(:need).permit(:title, :description, :category, :units, :unit_category, :location, :fulfill_by_date, :user_id, :organization_id)
  end

end
