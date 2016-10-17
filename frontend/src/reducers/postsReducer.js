import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function(state = initialState.postsList, action) {

  switch(action.type) {
    case types.FETCH_POSTS:
      return Object.assign({}, state, [
        ...state,
        { postsList: {posts: [], error: null}}
      ]);


    default:
      return state;
  }

}
