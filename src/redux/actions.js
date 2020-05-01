import { REQUEST_POSTS, CREATE_POST, SHOW_ALERT, HIDE_ALERT, SHOW_LOADER, HIDE_LOADER } from "./types";

export function createPost(post) {
  return {
    type: CREATE_POST,
    payload: post,
  };
}

export function hideLoader() {
  return {
    type: HIDE_LOADER,
  };
}

export function showLoader() {
  return { type: SHOW_LOADER };
}

export function showAlert(alert, timeout = 3000) {
  return (dispatch) => {
    dispatch({ type: SHOW_ALERT, payload: alert });
    setTimeout(() => dispatch(hideAlert()), timeout);
  };
}

export function hideAlert() {
  return { type: HIDE_ALERT };
}

export function fetchPosts() {
  return { type: REQUEST_POSTS };
  // return async (dispatch) => {
  //   try {
  //     dispatch(showLoader());
  //     const res = await fetch(
  //       "https://jsonplaceholder.typicode.сom/posts?_limit=5"
  //     );
  //     const json = await res.json();
  //     dispatch(hideLoader());
  //     dispatch({
  //       type: FETCH_POSTS,
  //       payload: json,
  //     });
  //   } catch (e) {
  //     dispatch(showAlert(' Что-то пошло не так :('));
  //   }
  // };
}
