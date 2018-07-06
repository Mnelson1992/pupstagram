import { combineReducers } from 'redux';
import imagesReducer from './ImagesReducer';

export default combineReducers({
  images: imagesReducer
});
