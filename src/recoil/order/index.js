import { atom, selector } from 'recoil';

/** 주문 정보 */
const orderState = atom({
  key: 'order',
  default: {
    placeId: 0,
    orderItems: [],
    paymentId: 0,
  },
});

/** 식사 장소 */
const placeState = selector({
  key: 'place',
  get: ({ get }) => {
    const order = get(orderState);
    return order.placeId;
  },
  set: ({ get, set }, newValue) => {
    const order = get(orderState);
    const newOrderState = {
      ...order,
      placeId: newValue,
    };
    set(orderState, newOrderState);
  },
});

/** 총 금액 */
const totalPriceState = selector({
  key: 'totalPrice',
  get: ({ get }) => {
    const order = get(orderState);
    const { orderItems } = order;
    const totalPrice = orderItems
      ? orderItems
          .map((item) => item.price * item.amount)
          .reduce((prev, current) => prev + current, 0)
      : 0;
    return totalPrice;
  },
});

/** 장바구니 */
const cartState = selector({
  key: 'cart',
  get: ({ get }) => {
    const order = get(orderState);
    return order.orderItems;
  },
  set: ({ get, set }, newValue) => {
    const order = get(orderState);
    const { orderItems } = order;
    const newOrderState = {
      ...order,
      orderItems: [...orderItems, newValue],
    };
    set(orderState, newOrderState);
  },
});

/** 결제 수단 */
const paymentState = selector({
  key: 'payment',
  get: ({ get }) => {
    const order = get(orderState);
    return order.paymentId;
  },
  set: ({ get, set }, newValue) => {
    const order = get(orderState);
    const newOrderState = {
      ...order,
      paymentId: newValue,
    };
    set(orderState, newOrderState);
  },
});

export { orderState, placeState, totalPriceState, cartState, paymentState };
