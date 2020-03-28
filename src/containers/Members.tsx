import React, { FC, useEffect } from 'react';
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

  useEffect(() => {
    dispatch(getMembersStart({ companyName }));
  }, [dispatch, companyName]);

  return (
    <MembersComponent
      companyName={companyName}
      users={githubState.users}
      isLoading={githubState.isLoading}
    />
  );
};

export default Members;
