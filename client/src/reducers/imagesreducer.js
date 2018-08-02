export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_IMAGE':
      return state.concat(action.image)
    case 'GET_IMAGES':
    debugger
      return action.images
    case 'IMAGE_FAVORITE':
      return state.map((image) => {
        if (image.id === action.image) {
          return {...image, favorites: image.favorites + 1}
        } else {
          return image
        }
      });
    default:
      return state;
  }
};
