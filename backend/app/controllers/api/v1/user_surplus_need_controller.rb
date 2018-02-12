class Api::V1::UserSurplusNeedController < ApplicationController

	def create
		@user_surplus_need = UserSurplusNeed.create(user_surplus_need_params)

	end

	private

  def user_surplus_need_params
    params.require(:user_surplus_need).permit(:user_id, :surplus_id, :need_id)
  end

end
