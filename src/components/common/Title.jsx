import { useLocation } from 'react-router-dom';

export default function Title({ children }) {
  /** 현재 페이지에 대한 정보 */
  const location = useLocation();
  /** 현재 페이지의 경로명 */
  const curPath = location.pathname;
  /** 메뉴 버튼 렌더링 여부 */
  const renderMenuBtn = curPath === '/menu';

  return (
    // <div
    //   css={{
    //     fontSize: '2.5rem',
    //     fontWeight: 700,
    //     width: '100%',
    //     height: '4rem',
    //     display: 'flex',
    //     flexBasis: '100%',
    //     alignItems: 'center',
    //     paddingBottom: '1rem',
    //     backgroundColor: 'var(--white)',
    //     '&:before': {
    //       content: '""',
    //       fontSize: 0,
    //       width: '8rem',
    //       height: '0.375rem',
    //       marginRight: '2rem',
    //       backgroundColor: 'var(--yellow)',
    //     },
    //     '&:after': {
    //       content: '""',
    //       fontSize: 0,
    //       lineHeight: 0,
    //       height: '0.375rem',
    //       flexGrow: 1,
    //       marginLeft: '2rem',
    //       backgroundColor: 'var(--yellow)',
    //     },
    //   }}
    // >
    //   {children}
    // </div>
    <div
      css={{
        width: '100%',
        height: '4.875rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 0 1rem 0',
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
              fontSize: '1.25rem',
              fontWeight: 700,
              width: '10rem',
              padding: '0.5rem 0',
              marginTop: '2.875rem',
              backgroundColor: 'var(--yellow)',
              border: '1px solid var(--yellow)',
              borderBottomLeftRadius: '12px',
              borderBottomRightRadius: '12px',
              '&:hover': {
                opacity: '50%',
              },
            }}
          >
            샌드위치
          </button>
          <button
            type="button"
            css={{
              fontSize: '1.25rem',
              fontWeight: 700,
              width: '10rem',
              padding: '0.5rem 0',
              marginTop: '2.875rem',
              backgroundColor: 'var(--yellow)',
              border: '1px solid var(--yellow)',
              borderBottomLeftRadius: '12px',
              borderBottomRightRadius: '12px',
              '&:hover': {
                opacity: '50%',
              },
            }}
          >
            샐러드
          </button>
        </div>
      )}
    </div>
  );
}
