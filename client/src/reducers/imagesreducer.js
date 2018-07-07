export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_IMAGE':
      return state.concat(action.image)
    case 'GET_IMAGES':
      return action.images
    case 'FETCH_IMAGE':
      return action.image
    default:
      return state;
  }
};
