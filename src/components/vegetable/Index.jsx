import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { getSauce } from '../../api/index';
import MainGrid from '../common/MainGrid';
import Card from '../common/Card';

export default function Index() {
  const queryClient = useQueryClient();

  const prefetchSauce = async () => {
    await queryClient.prefetchQuery({
      queryKey: ['sauce'],
      queryFn: getSauce,
    });
  };
  useEffect(() => {
    prefetchSauce();
  }, []);

  /** 프리페칭 데이터 */
  const prefetchData = queryClient.getQueryData(['vegetable']);
  const vegetableData = prefetchData.data;

  return (
    <MainGrid>
      {vegetableData.map((vegetable) => (
        <Card key={vegetable.vegetable_id}>
          <img
            src={vegetable.vegetable_img}
            alt={vegetable.vegetable_name_kr}
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
              margin: '1rem 0',
            }}
          >
            <p
              css={{
                fontSize: '1.5rem',
                fontWeight: 700,
              }}
            >
              {vegetable.vegetable_name_kr}
            </p>
            <p
              css={{
                color: 'var(--gray)',
                fontSize: '1rem',
                fontWeight: 500,
              }}
            >
              {vegetable.vegetable_name_en}
            </p>
          </div>
        </Card>
      ))}
    </MainGrid>
  );
}
