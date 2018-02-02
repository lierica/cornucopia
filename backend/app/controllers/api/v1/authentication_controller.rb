class Api::V1::AuthenticationController < ApplicationController

	def create
		user = User.find_by(email: login_params[:email])

		if user && user.authenticate(login_params[:password])
			render json: {email: user.email, id: user.id}
		else
			render json: {error: "User is invalid"}, status: 401
		end
	end

	private

	def login_params
		params.require(:loginFormData).permit(:email, :password)
	end



end
