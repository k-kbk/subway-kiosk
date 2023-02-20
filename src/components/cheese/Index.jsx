import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { getVegetable } from '../../api/index';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import MainGrid from '../common/MainGrid';
import Card from '../common/Card';
import itemRecoilState from '../../recoil/itemRecoilState';

export default function Index() {
  const queryClient = useQueryClient();

  const prefetchVegetable = async () => {
    await queryClient.prefetchQuery({
      queryKey: ['vegetable'],
      queryFn: getVegetable,
    });
  };
  useEffect(() => {
    prefetchVegetable();
  }, []);

  /** 프리페칭 데이터 */
  const prefetchData = queryClient.getQueryData(['cheese']);
  const cheeseData = prefetchData.data;
  const [itemState, setItemState] = useRecoilState(itemRecoilState);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(itemState);
  }, [itemState]);

  return (
    <MainGrid
      gridCss={{
        marginBottom: '4rem',
        gridTemplateColumns: '24rem 24rem 24rem',
      }}
    >
      {cheeseData.map((cheese) => (
        <Card
          key={cheese.cheese_id}
          css={{
            margin: '10rem',
          }}
          onClick={() => {
            setItemState({ ...itemState, cheeseId: cheese.id });
            navigate('/vegetable');
          }}
          cardCss={{
            border:
              cheese.id === itemState.cheeseId ? '6px solid var(--green)' : '',
          }}
        >
          <img
            src={cheese.cheese_img}
            alt={cheese.cheese_name_kr}
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
              {cheese.cheese_name_kr}
            </p>
            <p
              css={{
                color: 'var(--gray)',
                fontSize: '1rem',
                fontWeight: 500,
              }}
            >
              {cheese.cheese_name_en}
            </p>
          </div>
        </Card>
      ))}
    </MainGrid>
  );
}
