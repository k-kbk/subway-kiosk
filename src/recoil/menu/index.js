import { atom } from 'recoil';

/** 메뉴 타입 */
const menuTypeState = atom({
  key: 'menuType',
  default: 0,
});

export default menuTypeState;
