import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import menuTypeState from '../../recoil/menu/index';

export default function Title({ children }) {
  /** 현재 페이지에 대한 정보 */
  const location = useLocation();
  /** 현재 페이지의 경로명 */
  const curPath = location.pathname;
  /** 메뉴 버튼 렌더링 여부 */
  const renderMenuBtn = curPath === '/menu';
  const [menuType, setMenuType] = useRecoilState(menuTypeState);
  return (
    <div
      css={{
        width: '100%',
        height: '4.875rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 0 1.25rem 0',
      }}
    >
      <div
        css={{
          width: '100%',
          height: '0.375rem',
          position: 'fixed',
          zIndex: -10,
          backgroundColor: 'var(--yellow)',
        }}
      />
      <h1
        css={{
          fontSize: '2.5rem',
          fontWeight: 700,
          padding: '0 2rem',
          marginLeft: '8rem',
          backgroundColor: 'var(--white)',
        }}
      >
        {children}
      </h1>
      {renderMenuBtn && (
        <div
          css={{
            marginRight: '8rem',
          }}
        >
          <button
            type="button"
            css={{
              color: menuType ? 'var(--black)' : 'var(--white)',
              fontSize: '1.25rem',
              fontWeight: 700,
              width: '10rem',
              padding: '0.5rem 0',
              marginTop: '2.875rem',
              backgroundColor: menuType ? 'var(--yellow)' : 'var(--green)',
              border: menuType ? 'var(--yellow)' : 'var(--green)',
              borderBottomLeftRadius: '12px',
              borderBottomRightRadius: '12px',
              '&:hover': {
                opacity: '50%',
              },
            }}
            onClick={() => setMenuType(0)}
          >
            샌드위치
          </button>
          <button
            type="button"
            css={{
              color: menuType ? 'var(--white)' : 'var(--black)',
              fontSize: '1.25rem',
              fontWeight: 700,
              width: '10rem',
              padding: '0.5rem 0',
              marginTop: '3.25rem',
              backgroundColor: menuType ? 'var(--green)' : 'var(--yellow)',
              border: menuType ? 'var(--yellow)' : 'var(--green)',
              borderBottomLeftRadius: '12px',
              borderBottomRightRadius: '12px',
              '&:hover': {
                opacity: '50%',
              },
            }}
            onClick={() => setMenuType(1)}
          >
            샐러드
          </button>
        </div>
      )}
    </div>
  );
}
