import CartItem from './CartItem';
import { useRecoilValue } from 'recoil';
import cartKRState from '../../recoil/cart';
import LogoCompact from '../../assets/logo_compact.svg';

export default function Index() {
  const cartKR = useRecoilValue(cartKRState);
  return (
    <div
      css={{
        width: '100%',
        minHeight: '100vh',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '13.375rem 0 5rem 0',
        backgroundColor: 'var(--lightGray)',
      }}
    >
      {cartKR.length ? (
        cartKR.map((item, index) => (
          <CartItem
            key={index}
            index={index}
            img={item.img}
            menu={item.menu}
            combo={item.combo}
            bread={item.bread}
            cheese={item.cheese}
            vegetable={item.vegetable}
            sauce={item.sauce}
            topping={item.topping}
            size={item.size}
          />
        ))
      ) : (
        <div
          css={{
            fontSize: '1.75rem',
            fontWeight: 600,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '2rem',
          }}
        >
          <img
            src={LogoCompact}
            alt="empty"
            css={{
              width: '8rem',
              opacity: '50%',
              margin: '0 0 3rem 0',
            }}
          />
          담긴 상품이 없습니다
        </div>
      )}
    </div>
  );
}
