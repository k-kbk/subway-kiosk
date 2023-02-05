import { useLocation } from 'react-router-dom';
import Top from './Top';
import Title from './Title';

/** 제목 내용 */
const titleContent = {
  '/menu': '메뉴',
  '/bread': '빵 선택하기',
  '/cheese': '치즈 선택하기',
  '/vegetable': '야채 선택하기',
  '/sauce': '소스 선택하기',
  '/topping': '추가 선택하기',
  '/combo': '세트 선택하기',
  '/cart': '장바구니',
  '/pay': '결제하기',
};

export default function Header() {
  /** 현재 페이지에 대한 정보 */
  const location = useLocation();
  /** 현재 페이지의 경로명 */
  const curPath = location.pathname;
  /** 제목 렌더링 여부 */
  const renderTitle = curPath === '/result';

  return (
    <header
      css={{
        width: '100%',
        height: 'auto',
        paddingTop: '0.5rem',
        position: 'fixed',
        zIndex: 50,
        backgroundColor: 'var(--white)',
        filter: 'var(--dropShadow)',
      }}
    >
      <Top />
      {!renderTitle && <Title>{titleContent[curPath]}</Title>}
    </header>
  );
}
