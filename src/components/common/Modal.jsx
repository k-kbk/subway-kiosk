import { useNavigate } from 'react-router-dom';
import { useResetRecoilState } from 'recoil';
import { orderState } from '../../recoil/order/index';
import {
  currentOrderState,
  currentOrderKRState,
} from '../../recoil/current/index';
import menuTypeState from '../../recoil/menu/index';
import cartKRState from '../../recoil/cart';

export default function Modal({ setRenderModal }) {
  const navigate = useNavigate();
  const resetOrder = useResetRecoilState(orderState);
  const resetCurrentOrder = useResetRecoilState(currentOrderState);
  const resetCurrentOrderKR = useResetRecoilState(currentOrderKRState);
  const resetMenuType = useResetRecoilState(menuTypeState);
  const resetCartKR = useResetRecoilState(cartKRState);
  /** 모달창 닫기 */
  function handleCloseModal() {
    setRenderModal(false);
  }
  /** 모달창 닫기 */
  function handleClickHome() {
    resetMenuType();
    resetOrder();
    resetCurrentOrder();
    resetCurrentOrderKR();
    resetCartKR();
    navigate('/');
  }

  return (
    <div
      css={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
      }}
    >
      <div
        css={{
          width: '28rem',
          height: '14rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1.5rem 2rem',
          backgroundColor: 'var(--white)',
          borderRadius: '12px',
          filter: 'var(--dropShadow)',
        }}
      >
        <div
          css={{
            textAlign: 'center',
            lineHeight: '2rem',
            width: '100%',
            padding: '0 1.25rem',
            marginTop: '1.25rem',
          }}
        >
          <p
            css={{
              fontSize: '1.5rem',
              fontWeight: 700,
            }}
          >
            초기화면으로 돌아가시겠습니까?
          </p>
          <p
            css={{
              color: 'var(--gray)',
              fontSize: '1.125rem',
              fontWeight: 500,
            }}
          >
            ※ 모든 주문이 초기화됩니다
          </p>
        </div>
        <div
          css={{
            fontSize: '1.25rem',
            fontWeight: 700,
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <button
            type="button"
            css={{
              textAlign: 'center',
              color: 'var(--gray)',
              padding: '0.75rem 1.25rem',
              '&:hover': {
                opacity: '50%',
              },
            }}
            onClick={handleCloseModal}
          >
            취소
          </button>
          <button
            to="/"
            css={{
              textAlign: 'center',
              color: 'var(--green)',
              padding: '0.75rem 1.25rem',
              '&:hover': {
                opacity: '50%',
              },
            }}
            onClick={handleClickHome}
          >
            초기화면으로
          </button>
        </div>
      </div>
    </div>
  );
}
