import { useEffect, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { getSauce } from '../../api/index';
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
  const [currentOrder, setCurrentOrder] = useRecoilState(currentOrderState);
  const [currentOrderKR, setCurrentOrderKR] =
    useRecoilState(currentOrderKRState);

  useEffect(() => {
    console.log(currentOrder);
    console.log(currentOrderKR);
  }, [currentOrder]);

  const setItem = (id, name_kr) => {
    if (currentOrder.vegetableId.includes(id)) {
      let filtered = currentOrder.vegetableId.filter(
        (element) => element !== id,
      );
      setCurrentOrder({ ...currentOrder, vegetableId: filtered });
      let filteredKR = currentOrderKR.vegetable.filter(
        (element) => element !== name_kr,
      );
      setCurrentOrderKR({ ...currentOrderKR, vegetable: filteredKR });
    } else {
      setCurrentOrder({
        ...currentOrder,
        vegetableId: [...currentOrder.vegetableId, id],
      });
      setCurrentOrderKR({
        ...currentOrderKR,
        vegetable: [...currentOrderKR.vegetable, name_kr],
      });
    }
  };

  return (
    <MainGrid>
      {vegetableData.map((vegetable) => (
        <Card
          key={vegetable.vegetable_id}
          onClick={() => {
            if (currentOrder.vegetableId.length === 0) {
              setItem(vegetable.vegetable_id, vegetable.vegetable_name_kr);
            } else {
              if (currentOrder.vegetableId.indexOf(0) === 0) {
                if (vegetable.vegetable_id === 0) {
                  setItem(vegetable.vegetable_id, vegetable.vegetable_name_kr);
                }
              } else {
                if (vegetable.vegetable_id !== 0) {
                  setItem(vegetable.vegetable_id, vegetable.vegetable_name_kr);
                }
              }
            }
          }}
          cardCss={{
            border: currentOrder.vegetableId.includes(vegetable.vegetable_id)
              ? '6px solid var(--green)'
              : '',
          }}
        >
          <img
            src={vegetable.vegetable_img ? vegetable.vegetable_img : None}
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
