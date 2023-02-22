import { useState } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { orderState } from '../../recoil/order';
import cartKRState from '../../recoil/cart';
import menuTypeState from '../../recoil/menu';
import Cancel from '../../assets/cancel.svg';

export default function CartItem({
  index,
  img,
  menu,
  combo,
  bread,
  cheese,
  vegetable,
  sauce,
  topping,
  size,
}) {
  const menuType = useRecoilValue(menuTypeState);
  const [order, setOrder] = useRecoilState(orderState);
  const [cartKR, setCartKR] = useRecoilState(cartKRState);
  const [number, setNumber] = useState(1);

  const { orderItems } = order;
  const item = orderItems[index];
  console.log(orderItems);
  console.log(cartKR);

  const onIncrease = () => {
    const arr = [...orderItems];
    const newItem = {
      ...item,
      count: item.count + 1,
    };
    arr.splice(index, 1, newItem);
    setOrder({
      ...order,
      orderItems: arr,
    });
  };

  const onDecrease = () => {
    if (item.count !== 1) {
      const arr = [...orderItems];
      const newItem = {
        ...item,
        count: item.count - 1,
      };
      arr.splice(index, 1, newItem);
      setOrder({
        ...order,
        orderItems: arr,
      });
    }
  };

  console.log(size);
  const vegetableStr =
    vegetable.length !== 0 ? vegetable.join(', ') : '선택 안 함';
  const sauceStr = sauce.length !== 0 ? sauce.join(', ') : '선택 안 함';
  const toppingStr = topping.length !== 0 ? topping.join(', ') : '선택 안 함';

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
            src={img}
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
              {combo}
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
          {size && (
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
          )}
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
            >{` – ${cheese ?? '선택 안 함'}`}</span>
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
            >{` – ${
              vegetableStr.length > 17
                ? vegetableStr.substr(0, 17) + ' ...'
                : vegetableStr
            }`}</span>
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
            >{` – ${
              sauceStr.length > 17 ? sauceStr.substr(0, 17) + ' ...' : sauceStr
            }`}</span>
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
            >{` – ${
              toppingStr.length > 17
                ? toppingStr.substr(0, 17) + ' ...'
                : toppingStr
            }`}</span>
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
          {(item.price * item.count).toLocaleString()}원
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
          {item.count}
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
          onClick={() => {
            const arr = [...orderItems];
            const arrKR = [...cartKR];
            arr.splice(index, 1);
            setOrder({
              ...order,
              orderItems: arr,
            });
            arrKR.splice(index, 1);
            setCartKR(arrKR);
          }}
        >
          <img src={Cancel} alt="X" />
        </button>
      </div>
    </div>
  );
}
