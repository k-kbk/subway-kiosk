export default function Card({
  width = '18rem',
  height = '17rem',
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
        margin: '1rem 0',
        backgroundColor: 'var(--white)',
        borderRadius: '12px',
        cursor: 'pointer',
        '&:hover': {
          opacity: '50%',
        },
        ...cardCss,
      }}
    >
      {children}
    </div>
  );
}
