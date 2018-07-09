export function addImage (image) {
  return (dispatch) => {
    return fetch('/api/images', {method: 'post', body: JSON.stringify(image)})
      .then(response => response.json())
      .then(image => dispatch({type: 'ADD_IMAGE', image}))
  }
}

export function fetchImage (imageId) {
  return (dispatch) => {
    return fetch(`/api/images/${imageId}`)
      .then(response => response.json())
      .then(imageId => dispatch({type: 'FETCH_IMAGE', imageId}))
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
