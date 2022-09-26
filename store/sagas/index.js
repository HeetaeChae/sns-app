import { all, fork } from "redux-saga/effects";
import loginSaga from "./loginSaga";
import postSaga from "./postSaga";

export default function* rootSaga() {
  yield all([fork(loginSaga), fork(postSaga)]);
}
