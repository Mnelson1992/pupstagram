class Image < ApplicationRecord

  def wasFavorited
    self.favorites += 1
  end
  
end
