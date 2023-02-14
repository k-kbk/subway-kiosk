import MainGrid from '../common/MainGrid';
import Card from '../common/Card';

const toppingData = [
  {
    id: 1,
    nameKR: '단품',
    nameEN: 'Single',
    img: 'https://www.subway.co.kr/upload/menu/Ham_20211231094833168.png',
  },
  {
    id: 2,
    nameKR: '쿠키 세트',
    nameEN: 'Cookie Combo',
    img: 'https://www.subway.co.kr/upload/menu/chocolate_chip_20210315021446423.jpg',
  },
  {
    id: 3,
    nameKR: '웨지 세트',
    nameEN: 'Wedge Combo',
    img: 'https://www.subway.co.kr/upload/menu/%EC%9B%A8%EC%A7%80%ED%8F%AC%ED%85%8C%EC%9D%B4%ED%86%A0_20220916104739353.jpg',
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
