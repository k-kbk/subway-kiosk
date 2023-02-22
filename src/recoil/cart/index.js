import { atom } from 'recoil';

const cartKRState = atom({
  key: 'order_items_kr',
  default: [],
});

export default cartKRState;
