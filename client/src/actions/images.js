export function addimage (image) {
  return (dispatch) => {
    return fetch('/api/images', {method: 'post', body: JSON.stringify(image)})
      .then(response => response.json())
      .then(image => dispatch({type: 'ADD_IMAGE', image}))
  }
}
