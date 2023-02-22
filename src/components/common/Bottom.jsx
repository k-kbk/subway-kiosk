import { useLocation, useNavigate, Link } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';
import { totalPriceState } from '../../recoil/order';
import { orderState } from '../../recoil/order';
import {
  currentOrderState,
  currentOrderKRState,
} from '../../recoil/current/index';
import cartKRState from '../../recoil/cart/index';
import menuTypeState from '../../recoil/menu/index';
import Left from '../../assets/left.svg';
import Right from '../../assets/right.svg';

/** 이전 버튼 경로 및 내용 */
const prevBtn = {
  0: {
    '/bread': {
      to: '/menu',
      content: '메뉴',
    },
    '/cheese': {
      to: '/bread',
    },
    '/vegetable': {
      to: '/cheese',
    },
    '/sauce': {
      to: '/vegetable',
    },
    '/topping': {
      to: '/sauce',
    },
    '/combo': {
      to: '/topping',
    },
    '/cart': {
      to: '/menu',
      content: '메뉴',
    },
    '/payment': {
      to: '/cart',
      content: '장바구니',
    },
  },
  1: {
    '/cheese': {
      to: '/menu',
      content: '메뉴',
    },
    '/vegetable': {
      to: '/cheese',
    },
    '/sauce': {
      to: '/vegetable',
    },
    '/topping': {
      to: '/sauce',
    },
    '/combo': {
      to: '/topping',
    },
    '/cart': {
      to: '/menu',
      content: '메뉴',
    },
    '/payment': {
      to: '/cart',
      content: '장바구니',
    },
  },
};
/** 다음 버튼 경로 및 내용 */
const nextBtn = {
  0: {
    '/bread': {
      to: '/cheese',
      id: 'breadId',
    },
    '/cheese': {
      to: '/vegetable',
      id: 'cheeseId',
    },
    '/vegetable': {
      to: '/sauce',
      id: 'vegetableId',
    },
    '/sauce': {
      to: '/topping',
      id: 'sauceId',
    },
    '/topping': {
      to: '/combo',
      id: 'toppingId',
    },
  },
  1: {
    '/cheese': {
      to: '/vegetable',
      id: 'cheeseId',
    },
    '/vegetable': {
      to: '/sauce',
      id: 'vegetableId',
    },
    '/sauce': {
      to: '/topping',
      id: 'sauceId',
    },
    '/topping': {
      to: '/combo',
      id: 'toppingId',
    },
  },
};

export default function Bottom() {
  const navigate = useNavigate();
  const totalPrice = useRecoilValue(totalPriceState);
  const menuType = useRecoilValue(menuTypeState);
  const currentOrder = useRecoilValue(currentOrderState);
  const currentOrderKR = useRecoilValue(currentOrderKRState);
  const [order, setOrder] = useRecoilState(orderState);
  const [cartKR, setCartKR] = useRecoilState(cartKRState);
  /** 현재 페이지에 대한 정보 */
  const location = useLocation();
  /** 현재 페이지의 경로명 */
  const curPath = location.pathname;
  /** 이전 버튼 렌더링 여부 */
  const renderPrevBtn =
    curPath === '/bread' ||
    curPath === '/cheese' ||
    curPath === '/vegetable' ||
    curPath === '/sauce' ||
    curPath === '/topping' ||
    curPath === '/combo' ||
    curPath === '/cart' ||
    curPath === '/payment';
  /** 다음 버튼 렌더링 여부 */
  const renderNextBtn =
    curPath === '/bread' ||
    curPath === '/cheese' ||
    curPath === '/vegetable' ||
    curPath === '/sauce' ||
    curPath === '/topping';
  /** 초록 버튼 렌더링 여부 */
  const renderGreenBtn =
    curPath === '/menu' || curPath === '/cart' || curPath === '/combo';
  /** 초록 버튼 경로 및 내용 */
  const greenBtn = {
    '/menu': {
      to: '/cart',
      content: '장바구니',
    },
    '/cart': {
      to: '/payment',
      content: '결제하기',
    },
    '/combo': {
      to: '/menu',
      content: '장바구니에 담기',
    },
  };
  /** 현재 경로 일치 여부 */
  const isMenu = curPath === '/menu';
  const isCart = curPath === '/cart';
  const isPayment = curPath === '/payment';

  return (
    <nav
      css={{
        fontSize: '1.5rem',
        fontWeight: 600,
        width: '100%',
        height: '4.25rem',
        position: 'fixed',
        bottom: 0,
        display: 'flex',
        justifyContent: isMenu ? 'flex-end' : 'space-between',
        alignItems: 'center',
        backgroundColor: 'var(--white)',
        borderTop: '1.5px solid rgba(0, 0, 0, 0.1)',
        filter: 'var(--dropShadow)',
      }}
    >
      {renderPrevBtn && (
        <Link
          to={prevBtn[menuType][curPath].to}
          css={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0 1.5rem',
            '&:hover': {
              opacity: '50%',
            },
          }}
        >
          <img
            src={Left}
            alt="left"
            css={{
              width: '2.25rem',
              margin: '0 0.5rem',
            }}
          />
          {prevBtn[menuType][curPath].content ?? '이전'}
        </Link>
      )}
      <div
        css={{
          fontSize: '1.75rem',
          textAlign: 'center',
          width: '12rem',
          position: 'fixed',
          left: 'calc(50% - 6rem)',
        }}
      >
        {`${
          isCart || isPayment
            ? totalPrice.toLocaleString()
            : currentOrder.price.toLocaleString()
        }원`}
      </div>
      {renderNextBtn && (
        <button
          onClick={() => navigate(nextBtn[menuType][curPath].to)}
          css={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0 1.5rem',
            '&:hover': {
              opacity: '50%',
            },
          }}
          disabled={
            Array.isArray(currentOrder[nextBtn[menuType][curPath].id])
              ? currentOrder[nextBtn[menuType][curPath].id].length === 0
              : currentOrder[nextBtn[menuType][curPath].id] === null
          }
        >
          다음
          <img
            src={Right}
            alt="right"
            css={{
              width: '2.25rem',
              margin: '0 0.5rem',
            }}
          />
        </button>
      )}
      {renderGreenBtn && (
        <button
          css={{
            color: 'var(--white)',
            fontWeight: 700,
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0 2.5rem',
            backgroundColor: 'var(--green)',
            '&:hover': {
              opacity: '50%',
            },
          }}
          onClick={() => {
            if (curPath === '/combo') {
              console.log('here3');
              if (currentOrder.comboId) {
                setOrder({
                  ...order,
                  orderItems: [...order.orderItems, currentOrder],
                });
                setCartKR([...cartKR, currentOrderKR]);
                navigate(greenBtn[curPath].to);
              }
            }
            if (curPath === '/cart' && cartKR.length !== 0) {
              navigate(greenBtn[curPath].to);
            }
            if (curPath === '/menu') {
              console.log('here2');
              navigate(greenBtn[curPath].to);
            }
          }}
        >
          {greenBtn[curPath].content}
        </button>
      )}
    </nav>
  );
}
