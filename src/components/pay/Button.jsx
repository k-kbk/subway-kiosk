import { Link } from 'react-router-dom';
import CreditCard from '../../assets/creditCard.svg';
import Phone from '../../assets/phone.svg';
import GiftCard from '../../assets/giftCard.svg';

export default function ButtonGrey({ children }) {
  /** 버튼마다 아이콘 바꾸기 위한 코드 */
  let icon;
  if (children === '신용 카드') {
    icon = CreditCard;
  } else if (children.indexOf('간편 결제') === 0) {
    icon = Phone;
  } else {
    icon = GiftCard;
  }
  return (
    <Link
      to="/result"
      css={{
        width: '360px',
        height: '320px',
        background: '#F7F7F7',
        borderRadius: '15px',
        margin: '0 25px',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '28px',
        textAlign: 'center',
        boxShadow: '0px 3px 4px rgba(0, 0, 0, 0.3)',
        '&:hover': {
          opacity: '50%',
        },
      }}
    >
      <div
        css={{
          marginTop: '60px',
          marginBottom: '20px',
          alignItems: 'center',
        }}
      >
        <img alt="icon" src={icon} css={{ margin: '0 auto' }} />
      </div>
      <div
        css={{
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {children}
      </div>
    </Link>
  );
}
