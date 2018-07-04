class Api::ImagesController < ApplicationController

  def index
    render json: Image.all
  end

  def create
    @image = Image.new(image_params)
    if @image.save
      render json: @user
    else
      render json: {errors: @image.errors}, status: 400
    end
  end



  private

  def image_params
    params.require(:image).permit(:imageURL, :name, :description)
  end





end
