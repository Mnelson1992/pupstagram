export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_IMAGE':
      return state.concat(action.image)
    default:
      return state;
  }
};
