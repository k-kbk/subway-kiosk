import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MainGrid from '../common/MainGrid';
import Card from '../common/Card';
import itemRecoilState from '../../recoil/itemRecoilState';

const cheeseData = [
  {
    id: 1,
    nameKR: '아메리칸 치즈',
    nameEN: 'American Cheese',
    img: 'https://www.subway.co.kr/images/menu/img_recipe_c01.jpg',
  },
  {
    id: 2,
    nameKR: '슈레드 치즈',
    nameEN: 'Shredded Cheese',
    img: 'https://www.subway.co.kr/images/menu/img_recipe_c02.jpg',
  },
  {
    id: 3,
    nameKR: '모차렐라 치즈',
    nameEN: 'Mozzarella Cheese',
    img: 'https://www.subway.co.kr/images/menu/img_recipe_c03.jpg',
  },
];

export default function Index() {
  const [itemState, setItemState] = useRecoilState(itemRecoilState);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(itemState);
  }, [itemState]);

  return (
    <MainGrid
      gridCss={{
        marginBottom: '4rem',
        gridTemplateColumns: '24rem 24rem 24rem',
      }}
    >
      {cheeseData.map((cheese) => (
        <Card
          key={cheese.id}
          css={{
            margin: '10rem',
          }}
          onClick={() => {
            setItemState({ ...itemState, cheeseId: cheese.id });
            navigate('/vegetable');
          }}
          cardCss={{
            border:
              cheese.id === itemState.cheeseId ? '6px solid var(--green)' : '',
          }}
        >
          <img
            src={cheese.img}
            alt={cheese.name}
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
              {cheese.nameKR}
            </p>
            <p
              css={{
                color: 'var(--gray)',
                fontSize: '1rem',
                fontWeight: 500,
              }}
            >
              {cheese.nameEN}
            </p>
          </div>
        </Card>
      ))}
    </MainGrid>
  );
}
