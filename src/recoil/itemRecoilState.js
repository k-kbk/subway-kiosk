import { atom } from 'recoil';

const itemRecoilState = atom({
  key: 'items',
  default: {
    menuId: 0,
    breadId: 0,
    cheeseId: 0,
    vegetableId: [],
    sauceId: [],
    toppingId: [],
    comboId: 0,
    /** 처음 메뉴 선택했을 때 메뉴 가격만 */
    price: 0,
    count: 0,
    /** 현재 가격 (콤보 가격이 더해진) */
    currentPrice: 0,
  },
});

export default itemRecoilState;
