import { AxiosError } from 'axios';
import { User } from 'services/github/models';
import * as GithubActionType from 'actions/githubConstants'

export interface GetMembersParams {
  companyName: string;
}

export interface GetMembersResult {
  users: User[];
}

export interface GetMembersStart {
  type: typeof GithubActionType.GET_MEMBERS_START;
  payload: {
    params: GetMembersParams;
  };
}

export interface GetMembersSucced {
  type: typeof GithubActionType.GET_MEMBERS_SUCCEED;
  payload: {
    params: GetMembersParams;
    result: GetMembersResult;
  };
}

export interface GetMembersFail {
  type: typeof GithubActionType.GET_MEMBERS_FAIL;
  payload: {
    params: GetMembersParams;
    error: AxiosError;
  };
  error: boolean;
}

export const start = (params: GetMembersParams): GetMembersStart => ({
  type: GithubActionType.GET_MEMBERS_START,
  payload: {
    params,
  },
});

export const succeed = (
  params: GetMembersParams,
  result: GetMembersResult,
): GetMembersSucced => ({
  type: GithubActionType.GET_MEMBERS_SUCCEED,
  payload: {
    params,
    result,
  },
});

export const fail = (
  params: GetMembersParams,
  error: AxiosError,
): GetMembersFail => ({
  type: GithubActionType.GET_MEMBERS_FAIL,
  payload: {
    params,
    error,
  },
  error: true,
});

export type GithubAction =
  | ReturnType<typeof start>
  | ReturnType<typeof succeed>
  | ReturnType<typeof fail>;
