class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])

    if @user
      login(@user)
      render 'api/users/show.json.jbuilder'
    else
      render json: ["invalid username and/or password"], status: 401 
    end
  end

  def destroy
    if current_user
      logout
      render {}
    else
      render status: 404
    end
  end
end
