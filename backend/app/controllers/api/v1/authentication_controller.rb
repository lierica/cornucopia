class Api::V1::AuthenticationController < ApplicationController

	  def create
	    @user = User.find_by(email: login_params[:email])
	    if @user && @user.authenticate(login_params[:password])
	      render json: {
	        user: @user,
	        jwt: JWT.encode({user_id: @user.id}, 'secret', 'HS256')
	      }
	    else
	      render json: {error: 'User not found'}, status: 404
	    end
	  end

	  def show
	    if current_user
	      render json: current_user
	    else
	      render json: {error: 'No id present on headers'}, status: 404
	    end
	  end

	private

	def login_params
		params.require(:loginFormData).permit(:email, :password)
	end

end
