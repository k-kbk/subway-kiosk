export default function Card({
  width = '18rem',
  height = '18rem',
  onClick,
  children,
  cardCss,
}) {
  return (
    <div
      onClick={onClick}
      aria-hidden="true"
      css={{
        width,
        height,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0.75rem 0',
        backgroundColor: 'var(--white)',
        filter: 'var(--dropShadow)',
        borderRadius: '12px',
        cursor: 'pointer',
        '&:hover': {
          opacity: '70%',
        },
        ...cardCss,
      }}
    >
      {children}
    </div>
  );
}
