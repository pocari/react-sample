import Helmet from 'react-helmet';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { parse } from 'query-string';
import { characterData } from 'characterData';
import { useHistory, useLocation, useParams } from 'react-router';
import CharacterList from 'CharacterList';
import { Divider, Button, Icon } from 'semantic-ui-react';
import Spinner from 'components/Spiner';

interface ParamTypes {
  code: string;
}

const Character: React.FC<{}> = () => {
  const history = useHistory()
  const location = useLocation()
  const { code } = useParams<ParamTypes>()

  const codes = Object.keys(characterData);
  const targetCode = code;
  const isLoading = parse(location.search).loading === 'true';
  return codes.includes(targetCode) ? (
    <>
      <Helmet>
        <title>キャラクター一覧 | はねバド! </title>
      </Helmet>
      <header>
        <h1>はねバド！ キャラクター一覧</h1>
      </header>
      {isLoading ? (
        <Spinner/>
      ) : (
        <CharacterList
          school={characterData[targetCode].school}
          characters={characterData[targetCode].players}
        />
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
    </>
  ) : (
    <Redirect to="/" />
  );
};

export default Character;
