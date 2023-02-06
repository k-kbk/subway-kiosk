import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../home/Button.jsx';

export default function Index() {
  const navigate = useNavigate();
  /** 5초 뒤 초기화면으로 돌아감 */
  const timeout = () => {
    setTimeout(() => {
      navigate('/');
    }, 5000);
  };

  const [number, decrease] = useState(5);

  const timeDecrease = () => {
    setInterval(() => {
      decrease(number - 1);
    }, 1000);
  };

  /** 컴포넌트가 화면에 다 나타나면 timeout() 실행 */
  useEffect(() => {
    timeout();
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    timeDecrease();
    return () => {
      clearTimeout(timeDecrease);
    };
  });

  return (
    <div
      css={{
        textAlign: 'center',
        marginBottom: '180px',
      }}
    >
      <div
        css={{
          fontSize: '72px',
          fontStyle: 'normal',
          fontWeight: '700',
        }}
      >
        주문이 완료되었습니다!
      </div>
      <div
        css={{
          fontSize: '88px',
          fontStyle: 'normal',
          fontWeight: '700',
          color: 'var(--yellow)',
        }}
      >
        주문 번호: 123
      </div>
      <div
        css={{
          marginTop: '70px',
          position: 'relative',
          left: '80px',
        }}
      >
        <Button>확인</Button>
      </div>
      <div
        css={{
          fontSize: '30px',
          fontStyle: 'normal',
          fontWeight: '700',
          color: 'rgba(29, 28, 33, 0.8)',
          marginTop: '50px',
        }}
      >
        *{number}초 후, 초기화면으로 돌아갑니다
      </div>
    </div>
  );
}
