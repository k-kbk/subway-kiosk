import ListBox from './ListBox';

export default function Index() {
  const dummy = [
    {
      id: 1,
      menu: '에그마요 베이컨',
      bread: '화이트',
      cheese: '아메리칸 치즈',
      vegetable: '토마토, 오이, 양파',
      sauce: '스위트 칠리, 스위트 어니언',
      add: '없음',
      price: '5,800',
    },
    {
      id: 2,
      menu: '에그마요 페퍼로니',
      bread: '화이트',
      cheese: '슈레드 치즈',
      vegetable: '토마토, 오이, 양파',
      sauce: '스위트 칠리, 스위트 어니언',
      add: '없음',
      price: '8,800',
    },
    {
      id: 3,
      menu: '에그마요 페퍼로니',
      bread: '화이트',
      cheese: '슈레드 치즈',
      vegetable: '토마토, 오이, 양파',
      sauce: '스위트 칠리, 스위트 어니언',
      add: '없음',
      price: '5,800',
    },
    {
      id: 4,
      menu: '에그마요 페퍼로니',
      bread: '화이트',
      cheese: '슈레드 치즈',
      vegetable: '토마토, 오이, 양파',
      sauce: '스위트 칠리, 스위트 어니언',
      add: '없음',
      price: '5,800',
    },
  ];
  return (
    <div>
      {dummy.map((dum) => (
        <ListBox
          menu={dum.menu}
          bread={dum.bread}
          cheese={dum.cheese}
          vegetable={dum.vegetable}
          sauce={dum.sauce}
          add={dum.add}
          price={dum.price}
        />
      ))}
    </div>
  );
}
