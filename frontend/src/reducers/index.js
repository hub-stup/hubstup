import {combineReducers} from 'redux';
import startups from './startupReducer';
import industries from './industryReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';
import posts from './postsReducer';

const rootReducer = combineReducers({
  startups, //ES6 short-name property name. In ES5 = startups: startups
  industries,
  posts,
  ajaxCallsInProgress
});

export default rootReducer;
