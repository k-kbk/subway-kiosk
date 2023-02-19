export default function MainGrid({ gridCss, children }) {
  return (
    <main
      css={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '11.75rem 5rem 5rem 5rem',
        backgroundColor: 'var(--lightGray)',
      }}
    >
      <div
        css={{
          display: 'grid',
          placeItems: 'center',
          justifyItems: 'center',
          gridTemplateColumns: '22rem 22rem 22rem',
          overflow: 'scroll',
          ...gridCss,
        }}
      >
        {children}
      </div>
    </main>
  );
}
