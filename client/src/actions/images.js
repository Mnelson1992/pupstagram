export function addImage (image) {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/images', {method: 'post', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({image: image})})
      .then(response => response.json())
      .then(image => dispatch({type: 'ADD_IMAGE', image}))
  }
}

export function imageFavorite (imageId) {
  return (dispatch) => {
    return fetch(`http://localhost:3000/api/images/${imageId}`, {method: 'put', body: imageId})
      .then(response => response.json())
      .then(imageId => dispatch({type: 'IMAGE_FAVORITE', imageId}))
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
