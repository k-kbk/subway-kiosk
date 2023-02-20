import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import MainGrid from '../common/MainGrid';
import Card from '../common/Card';
import itemRecoilState from '../../recoil/itemRecoilState';

export default function Index() {
  const queryClient = useQueryClient();
  /** 프리페칭 데이터 */
  const prefetchData = queryClient.getQueryData(['bread']);
  const breadData = prefetchData.data;
  const [itemState, setItemState] = useRecoilState(itemRecoilState);
  const navigate = useNavigate();

  /** 상태 확인용 */
  useEffect(() => {
    console.log(itemState);
  }, [itemState]);

  return (
    <MainGrid>
      {breadData.map((bread) => (
        <Card
          key={bread.bread_id}
          onClick={() => {
            setItemState({ ...itemState, breadId: bread.bread_id });
            navigate('/cheese');
          }}
          cardCss={{
            border:
              bread.bread_id === itemState.breadId ? '8px solid var(--green)' : '',
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
