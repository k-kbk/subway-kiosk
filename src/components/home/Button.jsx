import { Link, useLocation } from 'react-router-dom';

export default function Button({ children }) {
  const location = useLocation();
  const curPath = location.pathname;

  let myLink;
  /** 현재 페이지가 메인인지 아닌지에 따라 link to 달라짐 */
  if (curPath === '/') {
    myLink = '/menu';
  } else {
    myLink = '/';
  }

  return (
    <Link
      to={myLink}
      css={{
        color: 'var(--white)',
        fontSize: '1.75rem',
        fontWeight: 700,
        width: '20rem',
        height: '5.25rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'var(--green)',
        borderRadius: '12px',
        boxShadow: '0px 3px 4px rgba(0, 0, 0, 0.3)',
        margin: '0 5.5rem',
        '&:hover': {
          opacity: '50%',
        },
      }}
    >
      {children}
    </Link>
  );
}
