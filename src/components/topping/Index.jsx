import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { getCombo } from '../../api/index';
import { useRecoilState } from 'recoil';
import {
  currentOrderState,
  currentOrderKRState,
} from '../../recoil/current/index';
import MainGrid from '../common/MainGrid';
import Card from '../common/Card';
import None from '../../assets/none.svg';

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
  const [currentOrder, setCurrentOrder] = useRecoilState(currentOrderState);
  const [currentOrderKR, setCurrentOrderKR] =
    useRecoilState(currentOrderKRState);

  const setItem = (id, name_kr, price) => {
    if (currentOrder.toppingId.includes(id)) {
      let filtered = currentOrder.toppingId.filter((element) => element !== id);
      setCurrentOrder({
        ...currentOrder,
        toppingId: filtered,
        price: currentOrder.price - price,
      });
      let filteredKR = currentOrderKR.topping.filter(
        (element) => element !== name_kr,
      );
      setCurrentOrderKR({ ...currentOrderKR, topping: filteredKR });
    } else {
      setCurrentOrder({
        ...currentOrder,
        toppingId: [...currentOrder.toppingId, id],
        price: currentOrder.price + price,
      });
      setCurrentOrderKR({
        ...currentOrderKR,
        topping: [...currentOrderKR.topping, name_kr],
      });
    }
  };
  useEffect(() => {
    console.log(currentOrder);
    console.log(currentOrderKR);
  }, [currentOrder]);

  return (
    <MainGrid>
      {toppingData.map((topping) => (
        <Card
          key={topping.topping_id}
          onClick={() => {
            if (currentOrder.toppingId.length === 0) {
              setItem(
                topping.topping_id,
                topping.topping_name_kr,
                topping.topping_price,
              );
            } else {
              if (currentOrder.toppingId.indexOf(0) === 0) {
                if (topping.topping_id === 0) {
                  setItem(
                    topping.topping_id,
                    topping.topping_name_kr,
                    topping.topping_price,
                  );
                }
              } else {
                if (topping.topping_id !== 0) {
                  setItem(
                    topping.topping_id,
                    topping.topping_name_kr,
                    topping.topping_price,
                  );
                }
              }
            }
          }}
          cardCss={{
            border: currentOrder.toppingId.includes(topping.topping_id)
              ? '6px solid var(--green)'
              : '',
          }}
        >
          <img
            src={topping.topping_img ? topping.topping_img : None}
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
            {topping.topping_id !== 0 && (
              <p
                css={{
                  color: 'var(--green)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  lineHeight: 1.2,
                  marginTop: '0.5rem',
                }}
              >
                {`+${topping.topping_price.toLocaleString()}원`}
              </p>
            )}
          </div>
        </Card>
      ))}
    </MainGrid>
  );
}
