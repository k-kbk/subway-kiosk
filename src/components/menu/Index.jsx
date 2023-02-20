import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { useQueryClient } from '@tanstack/react-query';
import { getBread, getCheese } from '../../api/index';
import menuTypeState from '../../recoil/menu/index';
import divide from '../../utils/divide';
import MainGrid from '../common/MainGrid';
import Card from '../common/Card';
import ModalPortal from '../common/ModalPortal';
import SandwichModal from '../common/SandwichModal';

export default function Index() {
  const [renderModal, setRenderModal] = useState(false);
  const [modalMenu, setModalMenu] = useState([]);
  const menuType = useRecoilValue(menuTypeState);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const prefetchBreadCheese = async () => {
    await queryClient.prefetchQuery({
      queryKey: ['bread'],
      queryFn: getBread,
    });
    await queryClient.prefetchQuery({
      queryKey: ['cheese'],
      queryFn: getCheese,
    });
  };
  useEffect(() => {
    prefetchBreadCheese();
  }, []);

  /** 프리페칭 데이터 */
  const { data: sandwichData } = queryClient.getQueryData(['sandwich']);
  const { data: saladData } = queryClient.getQueryData(['salad']);
  const menuData = {
    0: divide(sandwichData),
    1: saladData,
  };

  /** 모달창 열기 */
  function handleClickMenu(menu) {
    if (menuType) {
      navigate('/cheese');
    } else {
      setModalMenu(menu);
      setRenderModal(true);
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
        <Card
          key={menuType ? menu.menu_id : menu[0].menu_id}
          onClick={() => handleClickMenu(menu)}
        >
          <img
            src={menuType ? menu.menu_img : menu[0].menu_img}
            alt={menuType ? menu.menu_name_kr : menu[0].menu_name_kr}
            css={{
              width: '13rem',
              margin: '-0.5rem 0 0 0',
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
              {menuType ? menu.menu_name_kr : menu[0].menu_name_kr}
            </p>
            <p
              css={{
                color: 'var(--gray)',
                fontSize: '1rem',
                fontWeight: 500,
              }}
            >
              {menuType ? menu.menu_name_en : menu[0].menu_name_en}
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
            {`${menuType ? menu.menu_price : menu[0].menu_price}원`}
          </p>
          <p
            css={{
              color: 'var(--yellow)',
              fontWeight: 700,
            }}
          >
            {`${menuType ? menu.menu_kcal : menu[0].menu_kcal}kcal`}
          </p>
        </Card>
      ))}
      {renderModal && (
        <ModalPortal>
          <SandwichModal
            setRenderModal={setRenderModal}
            img={modalMenu[0].menu_img}
            kcal={modalMenu[0].menu_kcal}
            nameKR={modalMenu[0].menu_name_kr}
            nameEN={modalMenu[0].menu_name_en}
            price15={modalMenu[0].menu_price}
            price30={modalMenu[1].menu_price}
          />
        </ModalPortal>
      )}
    </MainGrid>
  );
}
