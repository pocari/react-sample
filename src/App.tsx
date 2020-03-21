import React from 'react';
import 'App.css';
import CharacterList, { Character } from 'CharacterList';
import Counter from 'Counter';

const App = () => {
  const characters: Character[] = [
    {
      id: 1,
      name: '羽咲 綾乃',
      age: 16,
      height: 152,
    },
    {
      id: 2,
      name: '荒垣 なぎさ',
      age: 18,
      height: 174,
    },
    {
      id: 3,
      name: '泉 理子',
      age: 18,
    },
  ];

  return (
    <>
      <div className="container">
        <header>
          <h1>はねバド！ キャラクター一覧</h1>
        </header>
        <CharacterList school="北小町高校" characters={characters} />
      </div>
      <Counter />
    </>
  );
};

export default App;
