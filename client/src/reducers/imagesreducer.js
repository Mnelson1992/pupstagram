export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_IMAGE':
      return state.concat(action.image)
    case 'GET_IMAGES':
      return action.images
    default:
      return state;
  }
};
