import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SandwichModal({
  setRenderModal,
  img,
  kcal,
  nameKR,
  nameEN,
  price15,
  price30,
}) {
  const [selectedSize, setSelectedSize] = useState('15cm');
  /** 사이즈 선택 */
  function handleSelectSize(event) {
    setSelectedSize(event.currentTarget.value);
  }
  /** 모달창 닫기 */
  function handleCloseModal() {
    setRenderModal(false);
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
          width: '34rem',
          height: '40rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0.5rem 2rem 1.5rem 2rem',
          backgroundColor: 'var(--white)',
          borderRadius: '12px',
          filter: 'var(--dropShadow)',
        }}
      >
        <div
          css={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            src={img}
            alt={nameKR}
            css={{
              width: '24rem',
            }}
          />
          <div
            css={{
              width: '22rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div
              css={{
                lineHeight: 1.2,
              }}
            >
              <p
                css={{
                  fontSize: '1.75rem',
                  fontWeight: 700,
                }}
              >
                {nameKR}
              </p>
              <p
                css={{
                  color: 'var(--gray)',
                  fontSize: '1.25rem',
                  fontWeight: 500,
                }}
              >
                {nameEN}
              </p>
            </div>
            <div
              css={{
                color: 'var(--yellow)',
                fontSize: '1.25rem',
                fontWeight: 700,
              }}
            >{`${kcal}kcal`}</div>
          </div>
          <div
            css={{
              width: '22rem',
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '4rem',
            }}
          >
            <button
              type="button"
              value="15cm"
              css={{
                color:
                  selectedSize === '15cm' ? 'var(--white)' : 'var(--black)',
                padding: '1.5rem 3rem',
                backgroundColor:
                  selectedSize === '15cm' ? 'var(--green)' : '#f7f7f7',
                borderRadius: 12,
                filter: 'var(--dropShadow)',
              }}
              onClick={handleSelectSize}
            >
              <p
                css={{
                  color: 'var(--yellow)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                }}
              >
                15cm
              </p>
              <p
                css={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                }}
              >
                {`${price15.toLocaleString()}원`}
              </p>
            </button>
            <button
              type="button"
              value="30cm"
              css={{
                color:
                  selectedSize === '30cm' ? 'var(--white)' : 'var(--black)',
                padding: '1.5rem 3rem',
                backgroundColor:
                  selectedSize === '30cm' ? 'var(--green)' : '#f7f7f7',
                borderRadius: 12,
                filter: 'var(--dropShadow)',
              }}
              onClick={handleSelectSize}
            >
              <p
                css={{
                  color: 'var(--yellow)',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                }}
              >
                30cm
              </p>
              <p
                css={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                }}
              >
                {`${price30.toLocaleString()}원`}
              </p>
            </button>
          </div>
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
          <Link
            to="/bread"
            css={{
              textAlign: 'center',
              color: 'var(--green)',
              padding: '0.75rem 1.25rem',
              '&:hover': {
                opacity: '50%',
              },
            }}
          >
            다음
          </Link>
        </div>
      </div>
    </div>
  );
}
