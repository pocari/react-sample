import { User } from 'services/github/models';
import { AxiosError } from 'axios';
import { Reducer } from 'redux';
import { GithubAction } from 'actions/github';
import * as GithubActionType from 'actions/githubConstants';

export interface GithubState {
  users: User[];
  isLoading: boolean;
  error?: AxiosError | null;
}

export const initialState: GithubState = {
  users: [],
  isLoading: false,
};

const githubReducer: Reducer<GithubState, GithubAction> = (
  state: GithubState = initialState,
  action: GithubAction,
): GithubState => {
  switch (action.type) {
    case GithubActionType.GET_MEMBERS_START:
      return {
        ...state,
        users: [],
        isLoading: true,
      };
    case GithubActionType.GET_MEMBERS_SUCCEED:
      return {
        ...state,
        users: action.payload.result.users,
        isLoading: false,
      };
    case GithubActionType.GET_MEMBERS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    default:
      // _ はnever になる
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const _ = action;

      return state;
  }
};

export default githubReducer;
