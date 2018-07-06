class Api::ImagesController < ApplicationController

  def index
    @images = Image.all
    render json: @images
  end

  def create
    @image = Image.new(image_params)
    if @image.save
      render json: @user
    else
      render json: {errors: @image.errors}, status: 400
    end
  end

  def update
    @image = Image.find(params[:id])
    @image.update_attributes(image_params)
    render json: @image
  end



  private

  def image_params
    params.require(:image).permit(:imageURL, :name, :description)
  end





end
