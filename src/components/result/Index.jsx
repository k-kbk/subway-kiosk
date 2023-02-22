import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useResetRecoilState } from 'recoil';
import { orderState } from '../../recoil/order/index';
import {
  currentOrderState,
  currentOrderKRState,
} from '../../recoil/current/index';
import menuTypeState from '../../recoil/menu/index';
import cartKRState from '../../recoil/cart';

export default function Index() {
  const navigate = useNavigate();
  const location = useLocation();
  const waitingNumber = location.state.waitingNumber;
  const resetOrder = useResetRecoilState(orderState);
  const resetCurrentOrder = useResetRecoilState(currentOrderState);
  const resetCurrentOrderKR = useResetRecoilState(currentOrderKRState);
  const resetMenuType = useResetRecoilState(menuTypeState);
  const resetCartKR = useResetRecoilState(cartKRState);

  const [number, decrease] = useState(5);
  /** 5초 뒤 초기화면으로 돌아감 */
  const timeout = () => {
    setTimeout(() => {
      navigate('/');
    }, 5000);
  };
  const timeDecrease = () => {
    setInterval(() => {
      decrease((counter) => counter - 1);
    }, 1000);
  };
  /** 컴포넌트가 화면에 다 나타나면 timeout() 실행 */
  useEffect(() => {
    resetMenuType();
    resetOrder();
    resetCurrentOrder();
    resetCurrentOrderKR();
    resetCartKR();
    timeout();
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  useEffect(() => {
    timeDecrease();
    return () => {
      clearInterval(timeDecrease);
    };
  }, []);

  return (
    <div
      css={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '1rem',
      }}
    >
      <div
        css={{
          fontSize: '3rem',
          fontWeight: 700,
        }}
      >
        주문이 완료되었습니다!
      </div>
      <div
        css={{
          fontSize: '3rem',
          fontWeight: 700,
          color: 'var(--yellow)',
        }}
      >
        대기 번호: {waitingNumber}
      </div>
      <div css={{ margin: '4rem 0' }}>
        <button
          to="/"
          onClick={() => {
            clearTimeout(timeout);
            navigate('/');
          }}
          css={{
            color: 'var(--white)',
            fontSize: '1.75rem',
            fontWeight: 700,
            width: '25rem',
            height: '5rem',
            borderRadius: '12px',
            backgroundColor: 'var(--green)',
            filter: 'var(--dropShadow)',
            '&:hover': {
              opacity: '50%',
            },
          }}
        >
          확인
        </button>
      </div>
      <div
        css={{
          fontSize: '1.5rem',
          fontWeight: 700,
          color: 'var(--gray)',
        }}
      >
        *{number}초 후, 초기화면으로 돌아갑니다
      </div>
    </div>
  );
}
