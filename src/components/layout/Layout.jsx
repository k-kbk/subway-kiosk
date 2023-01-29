import { useLocation } from 'react-router-dom';
import Header from '../common/Header';
import Bottom from '../common/Bottom';

export default function Layout({ children }) {
  /** 현재 페이지에 대한 정보 */
  const location = useLocation();
  /** 현재 페이지의 경로명 */
  const curPath = location.pathname;
  /** 레이아웃 렌더링 여부 */
  const renderLayout = curPath === '/';
  /** 하단 렌더링 여부 */
  const renderBottom = curPath === '/result';

  return (
    <>
      {!renderLayout && (
        <>
          <Header />
          {children}
          {!renderBottom && <Bottom />}
        </>
      )}
    </>
  );
}
