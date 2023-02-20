import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { useQueryClient } from '@tanstack/react-query';
import { placeState } from '../../recoil/order';
import { getSandwich, getSalad } from '../../api/index';
import Logo from '../../assets/logo_original.svg';
import Banner from '../../assets/banner2.svg';

export default function Index() {
  const navigate = useNavigate();
  const setPlace = useSetRecoilState(placeState);
  const queryClient = useQueryClient();
  // useQuery(['sandwich'], getSandwich, {
  //   select(data) {
  //     const sandwichData = divide(data.data);
  //     return sandwichData;
  //   },
  // });
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
        justifyContent: 'space-between',
        backgroundColor: 'var(--lightGray)',
        borderTop: '1.5rem solid var(--green)',
        borderBottom: '1.5rem solid var(--green)',
      }}
    >
      <div
        css={{
          width: '100%',
          height: '18%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <img
          src={Logo}
          css={{
            width: '20rem',
            filter: 'var(--dropShadow)',
            margin: '1rem 5rem',
          }}
          alt="logo"
        />
        <div
          css={{
            width: '100%',
            height: '16px',
            backgroundColor: 'var(--yellow)',
          }}
        />
      </div>
      <div
        css={{
          width: '100%',
          height: '45%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'DarkGray',
        }}
      >
        <img src={Banner} css={{ height: '88%' }} alt="banner" />
      </div>
      <div
        css={{
          width: '100%',
          height: '30%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '1.25rem 0',
        }}
      >
        <button
          type="button"
          value={1}
          onClick={handleClickPlace}
          css={{
            color: 'var(--white)',
            fontSize: '2rem',
            fontWeight: 700,
            width: '28rem',
            height: '6rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'var(--green)',
            borderRadius: '12px',
            // filter: 'var(--dropShadow)',
            boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.3)',
            margin: '0 4rem',
            '&:hover': {
              opacity: '50%',
            },
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
            fontSize: '2rem',
            fontWeight: 700,
            width: '28rem',
            height: '6rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'var(--green)',
            borderRadius: '12px',
            // filter: 'var(--dropShadow)',
            boxShadow: '0px 2px 3px rgba(0, 0, 0, 0.3)',
            margin: '0 4rem',
            '&:hover': {
              opacity: '50%',
            },
          }}
        >
          포장하기
        </button>
      </div>
    </div>
  );
}
