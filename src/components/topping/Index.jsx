import MainGrid from '../common/MainGrid';
import Card from '../common/Card';

const toppingData = [
  {
    id: 1,
    nameKR: '미트 추가',
    nameEN: 'Meat',
    img: 'https://www.subway.co.kr/upload/menu/img_toppping_01.png',
  },
  {
    id: 2,
    nameKR: '에그마요',
    nameEN: 'Egg Mayo',
    img: 'https://www.subway.co.kr/upload/menu/img_toppping_02.png',
  },
  {
    id: 3,
    nameKR: '베이컨',
    nameEN: 'Bacon',
    img: 'https://www.subway.co.kr/upload/menu/img_toppping_05.png',
  },
  {
    id: 4,
    nameKR: '치즈 추가',
    nameEN: 'Cheese',
    img: 'https://www.subway.co.kr/upload/menu/recipe_cheese.jpg',
  },
  {
    id: 5,
    nameKR: '아보카도',
    nameEN: 'Avocado',
    img: 'https://www.subway.co.kr/upload/menu/img_toppping_04.png',
  },
  {
    id: 6,
    nameKR: '오믈렛',
    nameEN: 'Omelet',
    img: 'https://www.subway.co.kr/upload/menu/img_toppping_03.png',
  },
];

export default function Index() {
  return (
    <MainGrid>
      {toppingData.map((topping) => (
        <Card key={topping.id}>
          <img
            src={topping.img}
            alt={topping.name}
            css={{
              width: '14rem',
            }}
          />
          <div
            css={{
              lineHeight: 1.2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '1rem 0',
            }}
          >
            <p
              css={{
                fontSize: '1.5rem',
                fontWeight: 700,
              }}
            >
              {topping.nameKR}
            </p>
            <p
              css={{
                color: 'var(--gray)',
                fontSize: '1rem',
                fontWeight: 500,
              }}
            >
              {topping.nameEN}
            </p>
          </div>
        </Card>
      ))}
    </MainGrid>
  );
}
