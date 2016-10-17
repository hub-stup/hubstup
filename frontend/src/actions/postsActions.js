import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';
import BlogApi from '../api/BlogApi';

export function fetchPosts() {
  return dispatch => {
    debugger;
    dispatch(beginAjaxCall());
    return BlogApi.getAll().then(posts => {
      debugger;
      dispatch(fetchPostsSuccess(posts));
    }).catch(error => {
      throw(error);
    });
  };
}

export function fetchPostsSuccess(posts) {
  return {type: types.FETCH_POSTS_SUCCESS, posts};
}

export function fetchPostsFailure(error) {

}

export function fetchPost(id) {
}

export function createPostSuccess(post) {

}

export function createPostFailure(error) {

}

export function fetchPostSuccess(post) {

}

export function fetchPostFailure(error) {

}

export function deletePost(id) {

}

export function deletePostSuccess(deletedPost) {

}

export function deletePostFailure(response) {

}
