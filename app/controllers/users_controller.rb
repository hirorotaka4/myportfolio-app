class UsersController < ApplicationController
  def edit
    @user = User.find(params[:id])
  end

  def update
    @user = User.find_by(id: params[:id])
    if @user.update_attributes(user_params)
      redirect_to :root
    else
      render action: :edit
    end
  end

  private

  def user_params
    params.require(:user).permit(:name, :email)
  end
end
