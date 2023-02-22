import { atom } from 'recoil';

const currentOrderState = atom({
  key: 'current_order',
  default: {
    menuId: null,
    breadId: null,
    cheeseId: null,
    vegetableId: [],
    sauceId: [],
    toppingId: [],
    comboId: null,
    price: 0,
    count: 1,
  },
});

const currentOrderKRState = atom({
  key: 'current_order_kr',
  default: {
    img: '',
    menu: '',
    size: '',
    bread: '',
    cheese: '',
    vegetable: [],
    sauce: [],
    topping: [],
    combo: '',
  },
});

export { currentOrderState, currentOrderKRState };
