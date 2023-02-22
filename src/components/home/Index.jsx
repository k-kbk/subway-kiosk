import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { useQueryClient, useQuery } from '@tanstack/react-query';
import { placeState } from '../../recoil/order';
import { getSandwich, getSalad } from '../../api/index';
import Logo from '../../assets/logo_original.svg';
import Banner from '../../assets/banner3.svg';

export default function Index() {
  const navigate = useNavigate();
  const setPlace = useSetRecoilState(placeState);
  const queryClient = useQueryClient();

  useQuery(['sandwich'], getSandwich, {
    select(data) {
      const sandwichData = divide(data.data);
      return sandwichData;
    },
  });
  const prefetchMenu = async () => {
    await queryClient.prefetchQuery({
      queryKey: ['sandwich'],
      queryFn: getSandwich,
    });
    await queryClient.prefetchQuery({
      queryKey: ['salad'],
      queryFn: getSalad,
    });
  };
  useEffect(() => {
    prefetchMenu();
  }, []);

  function handleClickPlace(event) {
    setPlace(+event.currentTarget.value);
    navigate('/menu');
  }

  return (
    <div
      css={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        backgroundColor: 'var(--lightGray)',
        borderTop: '8px solid var(--green)',
        borderBottom: '8px solid var(--green)',
      }}
    >
      <div
        css={{
          width: '100%',
          height: '25%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src={Logo}
          css={{
            width: '18rem',
            filter: 'var(--dropShadow)',
            margin: '0 0 1rem 0',
          }}
          alt="logo"
        />
        {/* <div
          css={{
            width: '100%',
            height: '16px',
            backgroundColor: 'var(--yellow)',
          }}
        /> */}
      </div>
      <div
        css={{
          width: '100%',
          height: '70%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          css={{
            width: '100%',
            height: '80%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(255, 188, 20, 0.95)',
            padding: '1.5rem 0 1.5rem 2rem',
          }}
        >
          <img src={Banner} css={{ height: '100%' }} alt="banner" />
        </div>
        <div
          css={{
            width: '100%',
            height: '30%',
            display: 'flex',
            justifyContent: 'end',
            alignItems: 'start',
            margin: '-2rem 10rem 0 0',
          }}
        >
          <button
            type="button"
            value={1}
            onClick={handleClickPlace}
            css={{
              color: 'var(--black)',
              fontSize: '1.75rem',
              fontWeight: 800,
              width: '22rem',
              height: '5.5rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgb(255, 206, 50)',
              borderTopLeftRadius: '12px',
              borderBottomLeftRadius: '12px',
              filter: 'var(--dropShadow)',
              // '&:hover': {
              // },
            }}
          >
            매장에서 식사
          </button>
          <button
            type="button"
            value={2}
            onClick={handleClickPlace}
            css={{
              color: 'var(--white)',
              fontSize: '1.75rem',
              fontWeight: 800,
              width: '22rem',
              height: '5.5rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgb(0, 146, 35)',
              borderTopRightRadius: '12px',
              borderBottomRightRadius: '12px',
              filter: 'var(--dropShadow)',
              // '&:hover': {
              // },
            }}
          >
            테이크 아웃
          </button>
        </div>
      </div>
    </div>
  );
}
