import MainGrid from '../common/MainGrid';
import Card from '../common/Card';

const vegetableData = [
  {
    id: 1,
    nameKR: '양상추',
    nameEN: 'Lettuce',
    img: 'https://www.subway.co.kr/images/menu/img_recipe_v01.jpg',
  },
  {
    id: 2,
    nameKR: '토마토',
    nameEN: 'Tomatoes',
    img: 'https://www.subway.co.kr/images/menu/img_recipe_v02.jpg',
  },
  {
    id: 3,
    nameKR: '오이',
    nameEN: 'Cucumbers',
    img: 'https://www.subway.co.kr/images/menu/img_recipe_v03.jpg',
  },
  {
    id: 4,
    nameKR: '피망',
    nameEN: 'Peppers',
    img: 'https://www.subway.co.kr/images/menu/img_recipe_v04.jpg',
  },
  {
    id: 5,
    nameKR: '양파',
    nameEN: 'Red Onions',
    img: 'https://www.subway.co.kr/images/menu/img_recipe_v05.jpg',
  },
  {
    id: 6,
    nameKR: '피클',
    nameEN: 'Pickles',
    img: 'https://www.subway.co.kr/images/menu/img_recipe_v06.jpg',
  },
];

export default function Index() {
  return (
    <MainGrid>
      {vegetableData.map((vegetable) => (
        <Card key={vegetable.id}>
          <img
            src={vegetable.img}
            alt={vegetable.name}
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
              {vegetable.nameKR}
            </p>
            <p
              css={{
                color: 'var(--gray)',
                fontSize: '1rem',
                fontWeight: 500,
              }}
            >
              {vegetable.nameEN}
            </p>
          </div>
        </Card>
      ))}
    </MainGrid>
  );
}
