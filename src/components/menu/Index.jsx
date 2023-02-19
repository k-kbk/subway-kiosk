import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainGrid from '../common/MainGrid';
import Card from '../common/Card';
import ModalPortal from '../common/ModalPortal';
import SandwichModal from '../common/SandwichModal';

/** 메뉴 더미 데이터 */
const menuData = {
  sandwich: [
    {
      id: 1,
      nameKR: '에그마요',
      nameEN: 'Egg Mayo',
      price15: 4900,
      price30: 9400,
      kcal: 416,
      img: 'https://www.subway.co.kr/upload/menu/Egg-Mayo_20211231094817112.png',
    },
    {
      id: 2,
      nameKR: '햄',
      nameEN: 'Ham',
      price15: 5200,
      price30: 9900,
      kcal: 262,
      img: 'https://www.subway.co.kr/upload/menu/Ham_20211231094833168.png',
    },
    {
      id: 3,
      nameKR: '참치',
      nameEN: 'Tuna',
      price15: 5200,
      price30: 9900,
      kcal: 316,
      img: 'https://www.subway.co.kr/upload/menu/Tuna_20211231095535268.png',
    },
    {
      id: 4,
      nameKR: '비엘티',
      nameEN: 'B.L.T.',
      price15: 6000,
      price30: 11200,
      kcal: 300,
      img: 'https://www.subway.co.kr/upload/menu/B.L.T_20211231094744175.png',
    },
    {
      id: 5,
      nameKR: '에그마요',
      nameEN: 'Egg Mayo',
      price15: 4900,
      price30: 9400,
      kcal: 416,
      img: 'https://www.subway.co.kr/upload/menu/Egg-Mayo_20211231094817112.png',
    },
    {
      id: 6,
      nameKR: '햄',
      nameEN: 'Ham',
      price15: 5200,
      price30: 9900,
      kcal: 262,
      img: 'https://www.subway.co.kr/upload/menu/Ham_20211231094833168.png',
    },
    {
      id: 7,
      nameKR: '참치',
      nameEN: 'Tuna',
      price15: 5200,
      price30: 9900,
      kcal: 316,
      img: 'https://www.subway.co.kr/upload/menu/Tuna_20211231095535268.png',
    },
    {
      id: 8,
      nameKR: '비엘티',
      nameEN: 'B.L.T.',
      price15: 6000,
      price30: 11200,
      kcal: 300,
      img: 'https://www.subway.co.kr/upload/menu/B.L.T_20211231094744175.png',
    },
    {
      id: 9,
      nameKR: '에그마요',
      nameEN: 'Egg Mayo',
      price15: 4900,
      price30: 9400,
      kcal: 416,
      img: 'https://www.subway.co.kr/upload/menu/Egg-Mayo_20211231094817112.png',
    },
    {
      id: 10,
      nameKR: '햄',
      nameEN: 'Ham',
      price15: 5200,
      price30: 9900,
      kcal: 262,
      img: 'https://www.subway.co.kr/upload/menu/Ham_20211231094833168.png',
    },
    {
      id: 11,
      nameKR: '참치',
      nameEN: 'Tuna',
      price15: 5200,
      price30: 9900,
      kcal: 316,
      img: 'https://www.subway.co.kr/upload/menu/Tuna_20211231095535268.png',
    },
    {
      id: 12,
      nameKR: '비엘티',
      nameEN: 'B.L.T.',
      price15: 6000,
      price30: 11200,
      kcal: 300,
      img: 'https://www.subway.co.kr/upload/menu/B.L.T_20211231094744175.png',
    },
  ],
  salad: [
    {
      id: 1,
      nameKR: '에그마요',
      nameEN: 'Egg Mayo',
      price: 6600,
      kcal: 254,
      img: 'https://www.subway.co.kr/upload/menu/%EC%97%90%EA%B7%B8%EB%A7%88%EC%9A%94_20220413025402885.png',
    },
    {
      id: 2,
      nameKR: '햄',
      nameEN: 'Ham',
      price: 6900,
      kcal: 99.5,
      img: 'https://www.subway.co.kr/upload/menu/%ED%96%84_20220413025435077.png',
    },
    {
      id: 3,
      nameKR: '참치',
      nameEN: 'Tuna',
      price: 6900,
      kcal: 153,
      img: 'https://www.subway.co.kr/upload/menu/%EC%B0%B8%EC%B9%98_20220413025420234.png',
    },
    {
      id: 4,
      nameKR: '비엘티',
      nameEN: 'B.L.T.',
      price: 7700,
      kcal: 153,
      img: 'https://www.subway.co.kr/upload/menu/BLT_20220413025509426.png',
    },
    {
      id: 5,
      nameKR: '에그마요',
      nameEN: 'Egg Mayo',
      price: 6600,
      kcal: 254,
      img: 'https://www.subway.co.kr/upload/menu/%EC%97%90%EA%B7%B8%EB%A7%88%EC%9A%94_20220413025402885.png',
    },
    {
      id: 6,
      nameKR: '햄',
      nameEN: 'Ham',
      price: 6900,
      kcal: 99.5,
      img: 'https://www.subway.co.kr/upload/menu/%ED%96%84_20220413025435077.png',
    },
    {
      id: 7,
      nameKR: '참치',
      nameEN: 'Tuna',
      price: 6900,
      kcal: 153,
      img: 'https://www.subway.co.kr/upload/menu/%EC%B0%B8%EC%B9%98_20220413025420234.png',
    },
    {
      id: 8,
      nameKR: '비엘티',
      nameEN: 'B.L.T.',
      price: 7700,
      kcal: 153,
      img: 'https://www.subway.co.kr/upload/menu/BLT_20220413025509426.png',
    },
    {
      id: 9,
      nameKR: '에그마요',
      nameEN: 'Egg Mayo',
      price: 6600,
      kcal: 254,
      img: 'https://www.subway.co.kr/upload/menu/%EC%97%90%EA%B7%B8%EB%A7%88%EC%9A%94_20220413025402885.png',
    },
    {
      id: 10,
      nameKR: '햄',
      nameEN: 'Ham',
      price: 6900,
      kcal: 99.5,
      img: 'https://www.subway.co.kr/upload/menu/%ED%96%84_20220413025435077.png',
    },
    {
      id: 11,
      nameKR: '참치',
      nameEN: 'Tuna',
      price: 6900,
      kcal: 153,
      img: 'https://www.subway.co.kr/upload/menu/%EC%B0%B8%EC%B9%98_20220413025420234.png',
    },
    {
      id: 12,
      nameKR: '비엘티',
      nameEN: 'B.L.T.',
      price: 7700,
      kcal: 153,
      img: 'https://www.subway.co.kr/upload/menu/BLT_20220413025509426.png',
    },
  ],
};

export default function Index() {
  const [renderModal, setRenderModal] = useState(false);
  const [modalMenu, setModalMenu] = useState({});
  const [menuType, setMenuType] = useState('sandwich');
  const navigate = useNavigate();
  /** 모달창 열기 */
  function handleOpenModal(menu) {
    if (menuType === 'sandwich') {
      setModalMenu(menu);
      setRenderModal(true);
      return;
    }
    if (menuType === 'salad') {
      navigate('/cheese');
    }
  }

  return (
    <MainGrid
      gridCss={{
        '@media(min-width: 1536px)': {
          gridTemplateColumns: '22rem 22rem 22rem 22rem',
        },
      }}
    >
      {menuData[menuType].map((menu) => (
        <Card key={menu.id} onClick={() => handleOpenModal(menu)}>
          <img
            src={menu.img}
            alt={menu.nameKR}
            css={{
              width: '14rem',
              margin: '-1.5rem 0 -0.75rem 0',
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
              {menu.nameKR}
            </p>
            <p
              css={{
                color: 'var(--gray)',
                fontSize: '1rem',
                fontWeight: 500,
              }}
            >
              {menu.nameEN}
            </p>
          </div>
          <p
            css={{
              color: 'var(--green)',
              fontSize: '1.5rem',
              fontWeight: 700,
              marginTop: '0.5rem',
            }}
          >
            {`${
              menuType === 'sandwich'
                ? menu.price15.toLocaleString()
                : menu.price.toLocaleString()
            }원`}
          </p>
          <p
            css={{
              color: 'var(--yellow)',
              fontWeight: 700,
            }}
          >
            {`${menu.kcal}kcal`}
          </p>
        </Card>
      ))}
      {renderModal && (
        <ModalPortal>
          <SandwichModal
            setRenderModal={setRenderModal}
            id={modalMenu.id}
            img={modalMenu.img}
            kcal={modalMenu.kcal}
            nameKR={modalMenu.nameKR}
            nameEN={modalMenu.nameEN}
            price15={modalMenu.price15}
            price30={modalMenu.price30}
          />
        </ModalPortal>
      )}
    </MainGrid>
  );
}
