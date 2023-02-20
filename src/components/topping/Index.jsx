import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { getCombo } from '../../api/index';
import { useRecoilState } from 'recoil';
import MainGrid from '../common/MainGrid';
import Card from '../common/Card';
import itemRecoilState from '../../recoil/itemRecoilState';

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
  const [itemState, setItemState] = useRecoilState(itemRecoilState);

  useEffect(() => {
    console.log(itemState);
  }, [itemState]);

  const setItem = (arr, id) => {
    if (arr.includes(id)) {
      let filtered = arr.filter((element) => element !== id);
      setItemState({ ...itemState, toppingId: filtered });
    } else {
      setItemState({
        ...itemState,
        toppingId: [...itemState.toppingId, id],
      });
    }
  };

  return (
    <MainGrid>
      {toppingData.map((topping) => (
        <Card key={topping.topping_id}>
        <Card
          key={topping.topping_id}
          onClick={() => {
            setItem(itemState.toppingId, topping.topping_id);
          }}
          cardCss={{
            border: itemState.toppingId.includes(topping.topping_id)
              ? '6px solid var(--green)'
              : '',
          }}
        >
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
