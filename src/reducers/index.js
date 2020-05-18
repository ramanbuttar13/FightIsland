import { combineReducers } from 'redux';
import blogs from './blogs_reducer'

const rootReducer = combineReducers({
    blogs
});

export default rootReducer;