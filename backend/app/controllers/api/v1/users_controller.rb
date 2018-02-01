class Api::V1::UsersController < ApplicationController

	def show
		@user = User.find(params[:id])
		render json: @user, status: 200
	end

	def create
		@user = User.create(user_params)
		render json: @user, status: 200
	end

  def update
    @user = User.find(params[:id])
    @user.update(user_params)
		render json: @user, status: 200
	end

	def destroy
		@user = User.find(params[:id])
		@user.destroy
	end

  private

  def surplus_params
    params.require(:user).permit(:first_name, :last_name, :role, :email, :phone, :password_digest)
  end

end
