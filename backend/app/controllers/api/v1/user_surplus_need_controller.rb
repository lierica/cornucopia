class Api::V1::UserSurplusNeedController < ApplicationController

	def create
		@user_surplus_need = UserSurplusNeed.create(user_surplus_need_params)
		@surplus = Surplus.find(user_surplus_need_params[:surplus_id])
		@need = Need.find(user_surplus_need_params[:need_id])
		@user = User.find(user_surplus_need_params[:user_id])
		render json: {surplus: SurplusSerializer.new(@surplus), need: NeedSerializer.new(@need), user: UserSerializer.new(@user) }, status: 200
	end

	private

  def user_surplus_need_params
    params.require(:user_surplus_need).permit(:user_id, :surplus_id, :need_id)
  end

end
