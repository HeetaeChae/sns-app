import { takeLatest, fork, all, put, call, delay } from "redux-saga/effects";

import {
  ADD_POST_FAILURE,
  ADD_POST_SUCCESS,
  ADD_POST_REQUEST,
  REMOVE_POST_FAILURE,
  REMOVE_POST_REQUEST,
  REMOVE_POST_SUCCESS,
} from "../modules/post";

function* addPost() {
  try {
    yield delay(3000);
    yield put({ type: ADD_POST_SUCCESS });
  } catch (err) {
    yield delay(3000);
    yield put({ type: ADD_POST_FAILURE });
  }
}
function* removePost() {
  try {
    yield delay(3000);
    yield put({ type: REMOVE_POST_SUCCESS });
  } catch (err) {
    yield delay(3000);
    yield put({ type: REMOVE_POST_FAILURE });
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}
function* watchRemovePost() {
  yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

export default function* postSaga() {
  yield all([fork(watchAddPost), fork(watchRemovePost)]);
}
