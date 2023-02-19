import { useQueryClient } from '@tanstack/react-query';
import MainGrid from '../common/MainGrid';
import Card from '../common/Card';

export default function Index() {
  const queryClient = useQueryClient();
  /** 프리페칭 데이터 */
  const prefetchData = queryClient.getQueryData(['bread']);
  const breadData = prefetchData.data;

  return (
    <MainGrid>
      {breadData.map((bread) => (
        <Card key={bread.bread_id}>
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
