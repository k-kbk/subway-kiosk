import { useState } from 'react';
import Cancel from '../../assets/cancel.svg';
import Minus from '../../assets/minus.svg';
import Plus from '../../assets/plus.svg';
import Sandwich from '../../assets/sandwich.svg';

export default function ListBox() {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    setNumber(number + 1);
  };

  const onDecrease = () => {
    if (number > 0) setNumber(number - 1);
  };

  return (
    <div
      css={{
        width: '900px',
        height: '250px',
        background: '#FFFFFF',
        boxShadow: '1px 1px 3px rgba(0, 0, 0, 0.25)',
        borderRadius: '15px',
        marginBottom: '30px',
      }}
    >
      <img
        alt="cancel"
        css={{
          float: 'right',
          marginRight: '20px',
          marginTop: '15px',
          '&:hover': {
            opacity: '50%',
          },
        }}
        src={Cancel}
      />
      <div
        css={{
          display: 'flex',
          position: 'relative',
          top: '15px',
        }}
      >
        <div
          css={{
            width: '220px',
            height: '220px',
            background: '#f4f4f4',
            borderRadius: '15px',
            marginLeft: '20px',
            marginRight: '50px',
          }}
        >
          <img
            alt="menu"
            src={Sandwich}
            css={{ marginTop: '35px', width: '160px', marginLeft: '30px' }}
          />
          <div
            css={{
              textAlign: 'center',
              fontStyle: 'normal',
              fontWeight: '700',
              fontSize: '24px',
              width: '160px',
              marginLeft: '30px',
              marginTop: '10px',
            }}
          >
            에그마요 베이컨 싱글
          </div>
        </div>
        <div
          css={{
            marginRight: '70px',
            fontStyle: 'normal',
            fontWeight: '700',
            fontSize: '20px',
            marginTop: '35px',
          }}
        >
          빵 - 화이트 <br />
          치즈 - 아메리칸 치즈 <br />
          야채 - 토마토, 오이, 양파, 피클, 할라피뇨 <br />
          소스 - 스위트 칠리, 스위트 어니언 <br />
          추가 선택 - 없음
        </div>
        <div css={{ marginTop: '20px' }}>
          <div
            css={{
              fontStyle: 'normal',
              fontWeight: '600',
              fontSize: '35px',
              color: 'var(--green)',
              marginBottom: '100px',
            }}
          >
            5,800원
          </div>
          <div css={{ float: 'right', display: 'flex' }}>
            <img
              role="presentation"
              onClick={onDecrease}
              alt="icon"
              src={Minus}
              css={{
                marginRight: '15px',
                '&:hover': {
                  opacity: '50%',
                },
              }}
            />
            <div
              css={{
                width: '50px',
                background: '#F7F7F7',
                borderRadius: '15px',
                textAlign: 'center',
                color: 'var(--black)',
                fontWeight: 'bold',
                fontSize: '25px',
              }}
            >
              {number}
            </div>
            <img
              role="presentation"
              onClick={onIncrease}
              alt="icon"
              src={Plus}
              css={{
                marginLeft: '15px',
                '&:hover': {
                  opacity: '50%',
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
