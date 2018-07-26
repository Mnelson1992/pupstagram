export function addImage (image) {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/images', {method: 'post', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({image: image})})
      .then(response => response.json())
      .then(image => dispatch({type: 'ADD_IMAGE', image}))
  }
}

export function imageFavorite (image) {
  const updatedImage = Object.assign(...image, { favorites: image.favorites + 1 })
  return (dispatch) => {
    return fetch(`/api/images/${image}`, {method: 'put', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({image: updatedImage})})
      .then(response => response.json())
      .then(imageId => dispatch({type: 'IMAGE_FAVORITE', image}))
  }
}

export function getImages () {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/images', {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(images => dispatch({type: 'GET_IMAGES', images}))
  }
}
