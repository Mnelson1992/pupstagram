class Api::ImagesController < ApplicationController

  def index
    @images = Image.all
    render json: @images
  end

  def create
    @image = Image.new(image_params)
    @image.favorites = 0
    if @image.save
      render json: @image
    else
      render json: {errors: @image.errors}, status: 400
    end
  end

  def update
    image = Image.find(params[:id])
    image.wasFavorited
    image.save
    render json: image.id
  end

  private

  def image_params
    params.require(:image).permit(:imageURL, :name, :description)
  end

end
