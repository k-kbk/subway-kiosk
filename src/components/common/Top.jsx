import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import menuTypeState from '../../recoil/menu/index';
import Home from '../../assets/home.svg';
import Logo from '../../assets/logo_original.svg';
import Step from './Step';
import ModalPortal from './ModalPortal';
import Modal from './Modal';

/** 단계 경로 및 내용 */
const step = {
  0: [
    { number: 1, path: '/bread' },
    { number: 2, path: '/cheese' },
    { number: 3, path: '/vegetable' },
    { number: 4, path: '/sauce' },
    { number: 5, path: '/topping' },
    { number: 6, path: '/combo' },
  ],
  1: [
    { number: 1, path: '/cheese' },
    { number: 2, path: '/vegetable' },
    { number: 3, path: '/sauce' },
    { number: 4, path: '/topping' },
    { number: 5, path: '/combo' },
  ],
};

export default function Top() {
  /** 모달 렌더링 여부 */
  const [renderModal, setRenderModal] = useState(false);
  /** 현재 페이지에 대한 정보 */
  const location = useLocation();
  /** 현재 페이지의 경로명 */
  const curPath = location.pathname;
  /** 단계 렌더링 여부 */
  const renderStep =
    curPath === '/bread' ||
    curPath === '/cheese' ||
    curPath === '/vegetable' ||
    curPath === '/sauce' ||
    curPath === '/topping' ||
    curPath === '/combo';
  /** 홈 버튼 렌더링 여부 */
  const renderHome = curPath === '/result';
  /** 모달창 열기 */
  function handleOpenModal() {
    setRenderModal(true);
  }
  const menuType = useRecoilValue(menuTypeState);

  return (
    <>
      <div
        css={{
          width: '100%',
          height: '1.75rem',
          top: '2.625rem',
          position: 'fixed',
          zIndex: '-10',
          backgroundColor: 'var(--green)',
          filter: 'var(--dropShadow)',
        }}
      />
      <div
        css={{
          width: 'auto',
          height: '5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 8rem',
        }}
      >
        <div
          css={{
            width: '16rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'var(--white)',
          }}
        >
          <img
            src={Logo}
            alt="logo"
            css={{
              width: '12rem',
              filter: 'var(--dropShadow)',
            }}
          />
        </div>
        {renderStep && (
          <div
            css={{
              width: 'auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {step[menuType].map((item) => (
              <Step key={item.number} active={curPath === item.path}>
                {item.number}
              </Step>
            ))}
          </div>
        )}
        {!renderHome && (
          <div
            css={{
              width: '6.25rem',
              backgroundColor: 'var(--white)',
            }}
          >
            <button
              type="button"
              css={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '&:hover': {
                  opacity: '50%',
                },
              }}
              onClick={handleOpenModal}
            >
              <img
                src={Home}
                alt="home"
                css={{
                  width: '2.25rem',
                  height: '2.25rem',
                  filter: 'var(--dropShadow)',
                }}
              />
            </button>
          </div>
        )}
      </div>
      {renderModal && (
        <ModalPortal>
          <Modal setRenderModal={setRenderModal} />
        </ModalPortal>
      )}
    </>
  );
}
