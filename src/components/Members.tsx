import React, { FC } from 'react';
import { Card, Image, Button, Icon, Divider, Header } from 'semantic-ui-react';
import _ from 'lodash';
import Helmet from 'react-helmet';
import { User } from 'services/github/models';
import { useHistory } from 'react-router';
import Spinner from './Spiner';

export interface MembersProps {
  companyName: string;
  users: User[];
  isLoading?: boolean;
  loadMembers: () => void;
}

const Members: FC<MembersProps> = ({
  companyName = '<会社名>',
  users = [],
  isLoading = false,
  loadMembers = () => {}
}) => {
  const history = useHistory()

  const title = `${_.capitalize(companyName)}の開発メンバー`;

  console.log(`title: ${title}`)
  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <Header>{title}</Header>
            <Card.Group>
              {users.map(user => (
                <Card
                  key={user.id}
                  href={`https://github.com/${user.login}`}
                  target="_blank"
                >
                  <Card.Content>
                    <Image floated="right" size="mini" src={user.avatar_url} />
                    <Card.Header data-test="card-header">
                      {user.login}
                    </Card.Header>
                    <Card.Meta>Github ID: {user.id}</Card.Meta>
                  </Card.Content>
                </Card>
              ))}
            </Card.Group>
          </>
        )}
      <Divider hidden />
      <Button
        basic
        color="grey"
        onClick={() => {
          history.push('/');
        }}
      >
        <Icon name="home" />
        ホームへ
      </Button>
      <Button
        basic
        color="grey"
        onClick={async () => {
          loadMembers()
        }}
      >
        <Icon name="sync alternate" />
        リロード
      </Button>
    </>
  );
};

export default Members;
