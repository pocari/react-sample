interface Character {
  id: number;
  name: string;
  age: number;
  height?: number;
}
export interface Characters {
  [code: string]: {
    school: string;
    players: Character[];
  };
}
export const characterData: Characters = {
  kitakomachi: {
    school: '北小町高校',
    players: [
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
    ],
  },
  frejo: {
    school: 'フレゼリシア女子短大付属高校',
    players: [
      {
        id: 1,
        name: '志波姫 唯華',
        age: 18,
        height: 165,
      },
      {
        id: 2,
        name: 'コニー・クリステンセン',
        age: 16,
      },
      {
        id: 3,
        name: '多賀城 ヒナ',
        age: 17,
      },
    ],
  },
};
