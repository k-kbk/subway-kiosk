import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { getCombo } from '../../api/index';
import MainGrid from '../common/MainGrid';
import Card from '../common/Card';

export default function Index() {
  const queryClient = useQueryClient();

  const prefetchCombo = async () => {
    await queryClient.prefetchQuery({
      queryKey: ['combo'],
      queryFn: getCombo,
    });
  };
  useEffect(() => {
    prefetchCombo();
  }, []);

  /** 프리페칭 데이터 */
  const prefetchData = queryClient.getQueryData(['topping']);
  const toppingData = prefetchData.data;

  return (
    <MainGrid>
      {toppingData.map((topping) => (
        <Card key={topping.topping_id}>
          <img
            src={topping.topping_img}
            alt={topping.topping_name_kr}
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
              {topping.topping_name_kr}
            </p>
            <p
              css={{
                color: 'var(--gray)',
                fontSize: '1rem',
                fontWeight: 500,
              }}
            >
              {topping.topping_name_en}
            </p>
          </div>
        </Card>
      ))}
    </MainGrid>
  );
}
