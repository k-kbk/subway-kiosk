import { atom, selector } from 'recoil';

/** 주문 정보 */
const orderState = atom({
  key: 'order',
  default: {
    place_id: 0,
    orderItems: [],
  },
});

/** 식사 장소 */
const placeState = selector({
  key: 'order_place',
  get: ({ get }) => {
    const order = get(orderState);
    return order.place_id;
  },
  set: ({ get, set }, newValue) => {
    const order = get(orderState);
    const newOrderState = {
      ...order,
      place_id: newValue,
    };
    set(orderState, newOrderState);
  },
});

/** 총 금액 */
const totalPriceState = selector({
  key: 'order_totalPrice',
  get: ({ get }) => {
    const order = get(orderState);
    const { orderItems } = order;
    const totalPrice = orderItems
      ? orderItems
          .map((item) => item.price * item.count)
          .reduce((prev, current) => prev + current, 0)
      : 0;
    return totalPrice;
  },
});

/** 장바구니 */
const cartState = selector({
  key: 'order_cart',
  get: ({ get }) => {
    const order = get(orderState);
    return order.orderItems;
  },
});

/** 결제 수단 */
// const paymentState = selector({
//   key: 'order_payment',
//   get: ({ get }) => {
//     const order = get(orderState);
//     return order.paymentId;
//   },
//   set: ({ get, set }, newValue) => {
//     const order = get(orderState);
//     const newOrderState = {
//       ...order,
//       paymentId: newValue,
//     };
//     set(orderState, newOrderState);
//   },
// });

export { orderState, placeState, totalPriceState, cartState };
