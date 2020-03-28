import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { start, succeed, fail } from 'actions/github';
import * as GithubActionType from 'actions/githubConstants';
import { getMembersFactory } from 'services/github/api';

function* runGetMembers(action: ReturnType<typeof start>) {
  const { companyName } = action.payload.params;

  try {
    const api = getMembersFactory();
    const users = yield call(api, companyName);

    yield put(succeed({ companyName }, { users }));
  } catch (e) {
    yield put(fail({ companyName }, e));
  }
}

export function* watchGetMembers() {
  yield takeLatest(GithubActionType.GET_MEMBERS_START, runGetMembers);
}

export default function* githubSaga() {
  yield all([fork(watchGetMembers)]);
}
