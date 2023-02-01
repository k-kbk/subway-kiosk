export default function Title({ children }) {
  return (
    <div
      css={{
        fontSize: '2.5rem',
        fontWeight: 700,
        width: '100%',
        height: '3rem',
        display: 'flex',
        flexBasis: '100%',
        alignItems: 'center',
        filter: 'var(--dropShadow)',
        '&:before': {
          content: '""',
          fontSize: 0,
          width: '8rem',
          height: '0.375rem',
          marginRight: '2rem',
          backgroundColor: 'var(--yellow)',
        },
        '&:after': {
          content: '""',
          fontSize: 0,
          lineHeight: 0,
          height: '0.375rem',
          flexGrow: 1,
          marginLeft: '2rem',
          backgroundColor: 'var(--yellow)',
        },
      }}
    >
      {children}
    </div>
  );
}
