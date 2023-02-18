import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import MainGrid from '../common/MainGrid';
import Card from '../common/Card';
import itemRecoilState from '../../recoil/itemRecoilState';

const sauceData = [
  {
    id: 1,
    nameKR: '랜치',
    nameEN: 'Ranch',
    img: 'https://www.subway.co.kr/images/menu/img_recipe_s01.jpg',
  },
  {
    id: 2,
    nameKR: '마요네즈',
    nameEN: 'Mayonnaise',
    img: 'https://www.subway.co.kr/images/menu/img_recipe_s02.jpg',
  },
  {
    id: 3,
    nameKR: '스위트 어니언',
    nameEN: 'Sweet Onion',
    img: 'https://www.subway.co.kr/images/menu/img_recipe_s07.jpg',
  },
  {
    id: 4,
    nameKR: '허니 머스타드',
    nameEN: 'Honey Mustard',
    img: 'https://www.subway.co.kr/images/menu/img_recipe_s03.jpg',
  },
  {
    id: 5,
    nameKR: '스위트 칠리',
    nameEN: 'Sweet Chilli',
    img: 'https://www.subway.co.kr/images/menu/img_recipe_s12.jpg',
  },
  {
    id: 6,
    nameKR: '핫 칠리',
    nameEN: 'Hot Chilli',
    img: 'https://www.subway.co.kr/images/menu/img_recipe_s18.jpg',
  },
];

export default function Index() {
  const [itemState, setItemState] = useRecoilState(itemRecoilState);

  const setItem = (arr, id) => {
    if (arr.includes(id)) {
      let filtered = arr.filter((element) => element !== id);
      setItemState({ ...itemState, sauceId: filtered });
    } else {
      setItemState({
        ...itemState,
        sauceId: [...itemState.sauceId, id],
      });
    }
  };

  useEffect(() => {
    console.log(itemState);
  }, [itemState]);

  return (
    <MainGrid>
      {sauceData.map((sauce) => (
        <Card
          key={sauce.id}
          onClick={() => {
            setItem(itemState.sauceId, sauce.id);
          }}
          cardCss={{
            border: itemState.sauceId.includes(sauce.id)
              ? '6px solid var(--green)'
              : '',
          }}
        >
          <img
            src={sauce.img}
            alt={sauce.name}
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
              {sauce.nameKR}
            </p>
            <p
              css={{
                color: 'var(--gray)',
                fontSize: '1rem',
                fontWeight: 500,
              }}
            >
              {sauce.nameEN}
            </p>
          </div>
        </Card>
      ))}
    </MainGrid>
  );
}
