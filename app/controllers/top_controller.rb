class TopController < ApplicationController
  def index
    @lists = List.where(user: current_user).order("created_at ASC")
    @now = Time.now
    @list = List.new
  end
end
