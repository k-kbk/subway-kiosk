import { Link } from 'react-router-dom';

export default function Button({ children }) {
  return (
    <Link
      to="/menu"
      css={{
        color: 'var(--white)',
        fontSize: '2rem',
        fontWeight: 700,
        width: '20rem',
        height: '6rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'var(--green)',
        borderRadius: '12px',
        boxShadow: '0px 3px 4px rgba(0, 0, 0, 0.3)',
        margin: '0 5rem',
        '&:hover': {
          opacity: '50%',
        },
      }}
    >
      {children}
    </Link>
  );
}
