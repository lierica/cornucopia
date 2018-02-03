class Api::V1::AuthenticationController < ApplicationController

	  def create
	    user = User.find_by(emailo: login_params[:email])
	    if user && user.authenticate(login_params[:password])
	      render json: {
	        id: user.id,
	        username: user.email,
	        jwt: JWT.encode({user_id: user.id}, ENV['secret_key'], 'HS256')
	      }
	    else
	      render json: {error: 'User not found'}, status: 404
	    end
	  end

	  def show
	    if current_user
	      render json: {
	        id: current_user.id,
	        username: current_user.username
	      }
	    else
	      render json: {error: 'No id present on headers'}, status: 404
	    end
	  end

	private

	def login_params
		params.require(:loginFormData).permit(:email, :password)
	end

end
