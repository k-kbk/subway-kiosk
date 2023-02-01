import Button from './Button.jsx';
import Logo from '../../assets/logo_original.svg';
import Banner from '../../assets/banner.svg';

export default function Index() {
  return (
    <div
      css={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        borderTop: '24px solid var(--green)',
        borderBottom: '24px solid var(--green)',
      }}
    >
      <div css={{ margin: '1rem 0 1rem 4rem' }}>
        <img
          src={Logo}
          css={{
            width: '18rem',
            filter: 'var(--dropShadow)',
          }}
          alt="logo"
        />
      </div>
      <img src={Banner} css={{ width: '100%' }} alt="banner" />
      <div
        css={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '2rem 0',
        }}
      >
        <Button>매장에서 식사</Button>
        <Button>포장하기</Button>
      </div>
    </div>
  );
}
