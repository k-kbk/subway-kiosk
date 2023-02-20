import { useState } from 'react';
import Cancel from '../../assets/cancel.svg';

export default function CartItem({
  menu,
  bread,
  cheese,
  vegetable,
  sauce,
  topping,
  price,
}) {
  const [number, setNumber] = useState(1);

  const onIncrease = () => {
    setNumber(number + 1);
  };

  const onDecrease = () => {
    if (number > 0) setNumber(number - 1);
  };

  return (
    <div
      css={{
        width: '58rem',
        height: '16rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '1.75rem',
        backgroundColor: 'var(--white)',
        borderRadius: '12px',
        filter: 'var(--dropShadow)',
        // boxShadow:
        //   '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
      }}
    >
      <div
        css={{
          width: '19rem',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '12px',
            marginLeft: '1.5rem',
          }}
        >
          <img
            alt="menu"
            src="https://www.subway.co.kr/upload/menu/Subway-Club%E2%84%A2_20211231095518589.png"
            css={{ width: '14rem', marginTop: '-1rem' }}
          />
          <div
            css={{
              fontWeight: 700,
              lineHeight: 1.2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <p
              css={{
                fontSize: '1.5rem',
              }}
            >
              {menu}
            </p>
            <p
              css={{
                color: 'var(--green)',
                fontSize: '1.25rem',
                fontWeight: 700,
              }}
            >
              웨지감자 세트
            </p>
          </div>
        </div>
      </div>
      <div
        css={{
          width: '22rem',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          css={{
            fontSize: '1.25rem',
            fontWeight: 700,
            lineHeight: 1.6,
            marginLeft: '1rem',
          }}
        >
          <div
            css={{
              color: 'var(--gray)',
            }}
          >
            빵
            <span
              css={{
                color: 'var(--black)',
              }}
            >{` – ${bread}`}</span>
          </div>
          <div
            css={{
              color: 'var(--gray)',
            }}
          >
            치즈
            <span
              css={{
                color: 'var(--black)',
              }}
            >{` – ${cheese ?? '없음'}`}</span>
          </div>
          <div
            css={{
              color: 'var(--gray)',
            }}
          >
            야채
            <span
              css={{
                color: 'var(--black)',
              }}
            >{` – ${vegetable}`}</span>
          </div>
          <div
            css={{
              color: 'var(--gray)',
            }}
          >
            소스
            <span
              css={{
                color: 'var(--black)',
              }}
            >{` – ${sauce}`}</span>
          </div>
          <div
            css={{
              color: 'var(--gray)',
            }}
          >
            추가 선택
            <span
              css={{
                color: 'var(--black)',
              }}
            >{` – ${topping ?? '없음'}`}</span>
          </div>
        </div>
      </div>
      <div
        css={{
          width: '13rem',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        <div
          css={{
            fontWeight: 700,
            fontSize: '1.75rem',
            color: 'var(--green)',
            marginBottom: '2rem',
          }}
        >
          {price.toLocaleString()}원
        </div>
        <div
          css={{
            fontSize: '1.5rem',
            fontWeight: 600,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '2rem',
          }}
        >
          <button
            type="button"
            onClick={onDecrease}
            css={{
              color: 'var(--yellow)',
              fontSize: '2rem',
              fontWeight: 500,
              padding: '0 1rem',
              margin: '0 0.5rem',
              '&:hover': {
                opacity: '50%',
              },
            }}
          >
            -
          </button>
          {number}
          <button
            type="button"
            onClick={onIncrease}
            css={{
              color: 'var(--yellow)',
              fontSize: '2rem',
              fontWeight: 500,
              padding: '0 1rem',
              margin: '0 0.5rem',
              '&:hover': {
                opacity: '50%',
              },
            }}
          >
            +
          </button>
        </div>
      </div>
      <div
        css={{
          width: '4rem',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '1.5rem',
        }}
      >
        <button
          type="button"
          css={{
            padding: '0.5rem',
            '&:hover': {
              opacity: '50%',
            },
          }}
        >
          <img src={Cancel} alt="X" />
        </button>
      </div>
    </div>
  );
}
