class Api::V1::UsersController < ApplicationController

	def show
		@user = User.find(params[:id])
		render json: @user, status: 200
	end

	def create
		@user = User.new(first_name: user_params[:first_name], last_name: user_params[:last_name], role: user_params[:role], email: user_params[:email], phone: user_params[:phone], password: user_params[:password])
		@organization = Organization.find_or_create_by(name: user_params[:organization])
		@organization.category = user_params[:organization_category]
		@user.organization_id = @organization.id
		@user.save
		token = issue_token(@user)
		render json: {user: UserSerializer.new(@user), jwt: token}, status: 200
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

  def user_params
    params.require(:user).permit(:first_name, :last_name, :role, :email, :phone, :password, :organization, :organization_category)
  end

end
