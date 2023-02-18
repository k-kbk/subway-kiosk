import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import MainGrid from '../common/MainGrid';
import Card from '../common/Card';
import itemRecoilState from '../../recoil/itemRecoilState';

const breadData = [
  {
    id: 1,
    nameKR: '위트',
    nameEN: 'Wheat',
    img: 'https://www.subway.co.kr/images/menu/img_recipe_b03.jpg',
  },
  {
    id: 2,
    nameKR: '허니 오트',
    nameEN: 'Honey Oat',
    img: 'https://www.subway.co.kr/images/menu/img_recipe_b01.jpg',
  },
  {
    id: 3,
    nameKR: '화이트',
    nameEN: 'White',
    img: 'https://www.subway.co.kr/images/menu/img_recipe_b05.jpg',
  },
  {
    id: 4,
    nameKR: '하티',
    nameEN: 'Hearty Italian',
    img: 'https://www.subway.co.kr/images/menu/img_recipe_b02.jpg',
  },
  {
    id: 5,
    nameKR: '파마산 오레가노',
    nameEN: 'Parmesan Oregano',
    img: 'https://www.subway.co.kr/images/menu/img_recipe_b04.jpg',
  },
  {
    id: 6,
    nameKR: '플랫 브레드',
    nameEN: 'Flat Bread',
    img: 'https://www.subway.co.kr/images/menu/img_recipe_b06.jpg',
  },
];

export default function Index() {
  const [itemState, setItemState] = useRecoilState(itemRecoilState);
  const navigate = useNavigate();

  /** 상태 확인용 */
  useEffect(() => {
    console.log(itemState);
  }, [itemState]);

  return (
    <MainGrid>
      {breadData.map((bread) => (
        <Card
          key={bread.id}
          onClick={() => {
            setItemState({ ...itemState, breadId: bread.id });
            navigate('/cheese');
          }}
          cardCss={{
            border:
              bread.id === itemState.breadId ? '6px solid var(--green)' : '',
          }}
        >
          <img
            src={bread.img}
            alt={bread.name}
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
            }}
          >
            <p
              css={{
                fontSize: '1.5rem',
                fontWeight: 700,
              }}
            >
              {bread.nameKR}
            </p>
            <p
              css={{
                color: 'var(--gray)',
                fontSize: '1rem',
                fontWeight: 500,
              }}
            >
              {bread.nameEN}
            </p>
          </div>
        </Card>
      ))}
    </MainGrid>
  );
}
