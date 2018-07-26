export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_IMAGE':
      return state.concat(action.image)
    case 'GET_IMAGES':
      return action.images
    case 'IMAGE_FAVORITE':
      return state.map((image) => {
        if (image.id === action.image.id) {
          return action.image
        } else {
          return image
        }
      });
    default:
      return state;
  }
};
