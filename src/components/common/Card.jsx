export default function Card({
  width = '18rem',
  height = '17rem',
  onClick,
  children,
}) {
  return (
    <>
      <div
        onClick={onClick}
        css={{
          width,
          height,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '1rem 0',
          backgroundColor: '#f7f7f7',
          borderRadius: 12,
          cursor: 'pointer',
          '&:hover': {
            opacity: '50%',
          },
        }}
      >
        {children}
      </div>
    </>
  );
}
