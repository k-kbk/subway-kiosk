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
        borderTop: '16px solid var(--green)',
        borderBottom: '16px solid var(--green)',
      }}
    >
      <div
        css={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img
          src={Logo}
          css={{
            width: '17rem',
            filter: 'var(--dropShadow)',
            margin: '1rem 4.5rem',
          }}
          alt="logo"
        />
        <div
          css={{
            width: '100%',
            height: '12px',
            backgroundColor: 'var(--yellow)',
          }}
        />
      </div>
      <img src={Banner} css={{ width: '100%' }} alt="banner" />
      <div
        css={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '1.25rem 0',
        }}
      >
        <Button>매장에서 식사</Button>
        <Button>포장하기</Button>
      </div>
    </div>
  );
}
