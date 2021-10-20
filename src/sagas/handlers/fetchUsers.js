import { call, put, takeEvery, /* takeLatest */ } from "redux-saga/effects";
import { userTypes } from "../../redux/types/users";
import fetchGetUsers from "../requests/fetchUsers";

function* handleGetUsers() {
  try {
    const users = yield call(fetchGetUsers);
    yield put({ type: userTypes.GET_USERS_SUCCESS, users });
  } catch (error) {
    yield put({ type: userTypes.GET_USERS_FAILED, message: error.message });
  }
}

function* watcherUserSaga() {
  yield takeEvery(userTypes.GET_USERS_REQUESTED, handleGetUsers);
  // yield takeLatest(userTypes.GET_USERS_REQUESTED, handleGetUsers);
}

export default watcherUserSaga