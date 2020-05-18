import { combineReducers } from 'redux';
import blogs from './blogs_reducer';
import blog from './single_blog_reducer';

const rootReducer = combineReducers({
    blogs: blogs, 
    blog: blog
});

export default rootReducer;