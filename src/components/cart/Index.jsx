import CartItem from './CartItem';
import { useRecoilValue } from 'recoil';
import cartKRState from '../../recoil/cart';

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
      {cartKR ? (
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
        <p>empty</p>
      )}
    </div>
  );
}
