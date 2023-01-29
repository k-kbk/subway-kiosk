import { useLocation, Link } from 'react-router-dom';
import Left from '../../assets/left.svg';
import Right from '../../assets/right.svg';

/** 이전 버튼 경로 및 내용 */
const prevBtn = {
  sandwich: {
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
    '/pay': {
      to: '/cart',
      content: '장바구니',
    },
  },
  salad: {
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
    '/pay': {
      to: '/cart',
      content: '장바구니',
    },
  },
};
/** 다음 버튼 경로 및 내용 */
const nextBtn = {
  sandwich: {
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
  salad: {
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
    to: '/pay',
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
    curPath === '/pay';
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

  return (
    <nav
      css={{
        fontSize: '1.5rem',
        fontWeight: 600,
        width: '100%',
        height: '4rem',
        display: 'flex',
        justifyContent: isMenu ? 'flex-end' : 'space-between',
        alignItems: 'center',
        borderTop: '1.5px solid rgba(0, 0, 0, 0.1)',
      }}
    >
      {renderPrevBtn && (
        <Link
          to={prevBtn['sandwich'][curPath].to}
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
          {prevBtn['sandwich'][curPath].content ?? '이전'}
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
        8,200원
      </div>
      {renderNextBtn && (
        <Link
          to={nextBtn['sandwich'][curPath].to}
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
            fontWeight: 600,
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
