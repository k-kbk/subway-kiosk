import CartItem from './CartItem';

export default function Index() {
  const dummy = [
    {
      id: 1,
      menu: '치킨 베이컨 아보카도',
      bread: '화이트',
      cheese: '아메리칸 치즈',
      vegetable: '토마토, 오이, 양파',
      sauce: '스위트 칠리, 스위트 어니언',
      topping: '없음',
      price: 5800,
    },
    {
      id: 2,
      menu: '에그마요 페퍼로니',
      bread: '화이트',
      cheese: '슈레드 치즈',
      vegetable: '토마토, 오이, 양파',
      sauce: '스위트 칠리, 스위트 어니언',
      topping: '없음',
      price: 8800,
    },
    {
      id: 3,
      menu: '에그마요 페퍼로니',
      bread: '화이트',
      cheese: '슈레드 치즈',
      vegetable: '토마토, 오이, 양파',
      sauce: '스위트 칠리, 스위트 어니언',
      topping: '없음',
      price: 5800,
    },
    {
      id: 4,
      menu: '에그마요 페퍼로니',
      bread: '화이트',
      cheese: '슈레드 치즈',
      vegetable: '토마토, 오이, 양파',
      sauce: '스위트 칠리, 스위트 어니언',
      topping: '없음',
      price: 5800,
    },
  ];
  return (
    <div
      css={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '12rem 0rem 4rem 0rem',
        backgroundColor: 'var(--lightGray)',
      }}
    >
      {dummy.map((dum) => (
        <CartItem
          key={dum.id}
          menu={dum.menu}
          bread={dum.bread}
          cheese={dum.cheese}
          vegetable={dum.vegetable}
          sauce={dum.sauce}
          topping={dum.topping}
          price={dum.price}
        />
      ))}
    </div>
  );
}
