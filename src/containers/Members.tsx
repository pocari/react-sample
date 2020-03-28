import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import MembersComponent from 'components/Members';
import { start } from 'actions/github';
import { RootState } from 'store';

interface ParamTypes {
  companyName: string
}

const Members: FC<{}> = () => {
  const { companyName } = useParams<ParamTypes>();
  const dispatch = useDispatch();
  const githubState = useSelector((state: RootState) => state.github );

  console.log(`githubState.user: ${githubState.users}`);
  console.log(`githubState.isLoading: ${githubState.isLoading}`);
  useEffect(() => {
    console.log(`companyName: ${companyName}`);
    dispatch(start({ companyName }));
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
