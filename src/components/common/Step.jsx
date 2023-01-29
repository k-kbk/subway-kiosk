export default function Step({ active, children }) {
  return (
    <div
      css={{
        fontSize: '2rem',
        fontWeight: 700,
        width: '4rem',
        height: '4rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 1.5rem',
        borderRadius: '50%',
        border: '0.5rem solid var(--green)',
        backgroundColor: active ? 'var(--yellow)' : 'var(--white)',
        filter: 'var(--dropShadow)',
      }}
    >
      {children}
    </div>
  );
}
