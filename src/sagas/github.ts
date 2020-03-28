import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import { getMembersStart, getMembersSucceed, getMembersFail } from 'actions/github';
import * as GithubActionType from 'actions/githubConstants';
import { getMembersFactory } from 'services/github/api';
import { User } from 'services/github/models';

function* runGetMembers(action: ReturnType<typeof getMembersStart>) {
  const { companyName } = action.payload.params;

  try {
    const api = getMembersFactory();
    // ここはgeneratorの制限で型推論(yieldの戻り値がUser[])できないらしい
    const users: User[] = yield call(api, companyName)

    yield put(getMembersSucceed({ companyName }, { users }));
  } catch (e) {
    yield put(getMembersFail({ companyName }, e));
  }
}

export function* watchGetMembers() {
  yield takeLatest(GithubActionType.GET_MEMBERS_START, runGetMembers);
}

export default function* githubSaga() {
  yield all([fork(watchGetMembers)]);
}
