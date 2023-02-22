import { useQueryClient } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import MainGrid from '../common/MainGrid';
import Card from '../common/Card';
import {
  currentOrderState,
  currentOrderKRState,
} from '../../recoil/current/index';

export default function Index() {
  const queryClient = useQueryClient();
  /** 프리페칭 데이터 */
  const prefetchData = queryClient.getQueryData(['bread']);
  const breadData = prefetchData.data;
  const [currentOrder, setCurrentOrder] = useRecoilState(currentOrderState);
  const [currentOrderKR, setCurrentOrderKR] =
    useRecoilState(currentOrderKRState);
  const navigate = useNavigate();

  return (
    <MainGrid>
      {breadData.map((bread) => (
        <Card
          key={bread.bread_id}
          onClick={() => {
            setCurrentOrder({ ...currentOrder, breadId: bread.bread_id });
            setCurrentOrderKR({
              ...currentOrderKR,
              bread: bread.bread_name_kr,
            });
            navigate('/cheese');
          }}
          cardCss={{
            border:
              bread.bread_id === currentOrder.breadId
                ? '6px solid var(--green)'
                : '',
          }}
        >
          <img
            src={bread.bread_img}
            alt={bread.bread_name_kr}
            css={{
              width: '14rem',
            }}
          />
          <div
            css={{
              lineHeight: 1.2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <p
              css={{
                fontSize: '1.5rem',
                fontWeight: 700,
              }}
            >
              {bread.bread_name_kr}
            </p>
            <p
              css={{
                color: 'var(--gray)',
                fontSize: '1rem',
                fontWeight: 500,
              }}
            >
              {bread.bread_name_en}
            </p>
          </div>
        </Card>
      ))}
    </MainGrid>
  );
}
