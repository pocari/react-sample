import React, { FC, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import MembersComponent from 'components/Members';
import { getMembersStart } from 'actions/github';
import { RootState } from 'store';

interface ParamTypes {
  companyName: string
}

const Members: FC<{}> = () => {
  const { companyName } = useParams<ParamTypes>();
  const dispatch = useDispatch();
  const githubState = useSelector((state: RootState) => state.github );

  const loadMembers = useCallback(
    () => dispatch(getMembersStart({ companyName })),
    [companyName, dispatch]
  );

  useEffect(() => {
    loadMembers()
  }, [loadMembers]);

  return (
    <MembersComponent
      companyName={companyName}
      users={githubState.users}
      isLoading={githubState.isLoading}
      loadMembers={loadMembers}
    />
  );
};

export default Members;
