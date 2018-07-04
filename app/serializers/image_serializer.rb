class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :imageURL, :name, :description
end
