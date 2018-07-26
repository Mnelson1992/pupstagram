export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_IMAGE':
      return state.concat(action.image)
    case 'GET_IMAGES':
      return action.images
    case 'IMAGE_FAVORITE':
      const image = state.find(image => image.id === action.imageId)
      image.favorites += 1
      return [...state.filter(image => image.id !== action.imageId), image]
    case 'FETCH_IMAGE':
      return action.image
    default:
      return state;
  }
};
