import { useLocation, Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { totalPriceState } from '../../recoil/order';
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
    },
    '/cheese': {
      to: '/vegetable',
    },
    '/vegetable': {
      to: '/sauce',
    },
    '/sauce': {
      to: '/topping',
    },
    '/topping': {
      to: '/combo',
    },
  },
  1: {
    '/cheese': {
      to: '/vegetable',
    },
    '/vegetable': {
      to: '/sauce',
    },
    '/sauce': {
      to: '/topping',
    },
    '/topping': {
      to: '/combo',
    },
  },
};
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

export default function Bottom() {
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
  /** 현재 경로 일치 여부 */
  const isMenu = curPath === '/menu';
  /** 총 금액 */
  const totalPrice = useRecoilValue(totalPriceState);
  const menuType = useRecoilValue(menuTypeState);

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
        {`${totalPrice}원`}
      </div>
      {renderNextBtn && (
        <Link
          to={nextBtn[menuType][curPath].to}
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
          다음
          <img
            src={Right}
            alt="right"
            css={{
              width: '2.25rem',
              margin: '0 0.5rem',
            }}
          />
        </Link>
      )}
      {renderGreenBtn && (
        <Link
          to={greenBtn[curPath].to}
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
        >
          {greenBtn[curPath].content}
        </Link>
      )}
    </nav>
  );
}
