import { useRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import MainGrid from '../common/MainGrid';
import Card from '../common/Card';
import itemRecoilState from '../../recoil/itemRecoilState';

const comboData = [
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
  const [itemState, setItemState] = useRecoilState(itemRecoilState);
  const [change, setChange] = useState('off');

  const isOnClick = () => {
    setChange('on');
    console.log(change);
  };

  useEffect(() => {
    console.log(itemState);
  }, [itemState]);

  const setPrice = (id) => {
    /** 맨 처음 선택 시 */
    if (change === 'off') {
      setItemState({
        ...itemState,
        comboId: id,
        currentPrice:
          itemState.currentPrice + (id === 1 ? 0 : id === 2 ? 1900 : 3100),
      });
    } else {
      /** 2회 이상 선택 시 */
      if (id === 1) {
        if (itemState.currentPrice === itemState.price + 1900) {
          setItemState({
            ...itemState,
            comboId: id,
            currentPrice: itemState.currentPrice - 1900,
          });
        } else if (itemState.currentPrice === itemState.price + 3100) {
          setItemState({
            ...itemState,
            comboId: id,
            currentPrice: itemState.currentPrice - 3100,
          });
        }
      }
      if (id === 2) {
        if (itemState.currentPrice === itemState.price) {
          setItemState({
            ...itemState,
            comboId: id,
            currentPrice: itemState.currentPrice + 1900,
          });
        } else if (itemState.currentPrice === itemState.price + 3100) {
          setItemState({
            ...itemState,
            comboId: id,
            currentPrice: itemState.currentPrice - 3100 + 1900,
          });
        }
      } else if (id === 3) {
        if (itemState.currentPrice === itemState.price) {
          setItemState({
            ...itemState,
            comboId: id,
            currentPrice: itemState.currentPrice + 3100,
          });
        } else if (itemState.currentPrice === itemState.price + 1900) {
          setItemState({
            ...itemState,
            comboId: id,
            currentPrice: itemState.currentPrice - 1900 + 3100,
          });
        }
      }
    }
  };

  return (
    <MainGrid>
      {comboData.map((combo) => (
        <Card
          key={combo.id}
          onClick={() => {
            setPrice(combo.id);
            isOnClick();
          }}
          cardCss={{
            border:
              combo.id === itemState.comboId ? '6px solid var(--green)' : '',
          }}
        >
          <img
            src={combo.img}
            alt={combo.name}
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
              {combo.nameKR}
            </p>
            <p
              css={{
                color: 'var(--gray)',
                fontSize: '1rem',
                fontWeight: 500,
              }}
            >
              {combo.nameEN}
            </p>
          </div>
        </Card>
      ))}
    </MainGrid>
  );
}
