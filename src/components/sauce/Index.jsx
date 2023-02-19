import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { getTopping } from '../../api/index';
import MainGrid from '../common/MainGrid';
import Card from '../common/Card';

export default function Index() {
  const queryClient = useQueryClient();

  const prefetchTopping = async () => {
    await queryClient.prefetchQuery({
      queryKey: ['topping'],
      queryFn: getTopping,
    });
  };
  useEffect(() => {
    prefetchTopping();
  }, []);

  /** 프리페칭 데이터 */
  const prefetchData = queryClient.getQueryData(['sauce']);
  const sauceData = prefetchData.data;

  return (
    <MainGrid>
      {sauceData.map((sauce) => (
        <Card key={sauce.sauce_id}>
          <img
            src={sauce.sauce_img}
            alt={sauce.sauce_name_kr}
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
              {sauce.sauce_name_kr}
            </p>
            <p
              css={{
                color: 'var(--gray)',
                fontSize: '1rem',
                fontWeight: 500,
              }}
            >
              {sauce.sauce_name_en}
            </p>
          </div>
        </Card>
      ))}
    </MainGrid>
  );
}
