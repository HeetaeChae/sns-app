import { takeLatest, fork, all, put, call, delay } from "redux-saga/effects";

import {
  LOG_IN_FAILURE,
  LOG_IN_SUCCESS,
  LOG_IN_REQUEST,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
} from "../modules/login";

function* logIn() {
  try {
    yield delay(3000);
    yield put({ type: LOG_IN_SUCCESS });
  } catch (err) {
    yield delay(3000);
    yield put({ type: LOG_IN_FAILURE });
  }
}
function* logOut() {
  try {
    yield delay(3000);
    yield put({ type: LOG_OUT_SUCCESS });
  } catch (err) {
    yield delay(3000);
    yield put({ type: LOG_OUT_FAILURE });
  }
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}
function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

export default function* loginSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut)]);
}
