import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { start, succeed, fail } from 'actions/github';
import * as GithubActionType from 'actions/githubConstants';
import { getMembersFactory } from 'services/github/api';
import { User } from 'services/github/models';

function* runGetMembers(action: ReturnType<typeof start>) {
  const { companyName } = action.payload.params;

  try {
    const api = getMembersFactory();
    // ここはgeneratorの制限で型推論(yieldの戻り値がUser[])できないらしい
    const users: User[] = yield call(api, companyName)

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
