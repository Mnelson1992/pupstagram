class ImageSerializer < ActiveModel::Serializer
  attributes :id, :imageURL, :name, :description, :favorites
end
