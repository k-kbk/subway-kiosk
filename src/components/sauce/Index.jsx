import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { getTopping } from '../../api/index';
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
  const [currentOrder, setCurrentOrder] = useRecoilState(currentOrderState);
  const [currentOrderKR, setCurrentOrderKR] =
    useRecoilState(currentOrderKRState);

  const setItem = (id, name_kr) => {
    if (currentOrder.sauceId.includes(id)) {
      let filtered = currentOrder.sauceId.filter((element) => element !== id);
      setCurrentOrder({ ...currentOrder, sauceId: filtered });
      let filteredKR = currentOrderKR.sauce.filter(
        (element) => element !== name_kr,
      );
      setCurrentOrderKR({ ...currentOrderKR, sauce: filteredKR });
    } else {
      setCurrentOrder({
        ...currentOrder,
        sauceId: [...currentOrder.sauceId, id],
      });
      setCurrentOrderKR({
        ...currentOrderKR,
        sauce: [...currentOrderKR.sauce, name_kr],
      });
    }
  };
  useEffect(() => {
    console.log(currentOrder);
    console.log(currentOrderKR);
  }, [currentOrder]);

  return (
    <MainGrid>
      {sauceData.map((sauce) => (
        <Card
          key={sauce.sauce_id}
          onClick={() => {
            if (currentOrder.sauceId.length === 0) {
              setItem(sauce.sauce_id, sauce.sauce_name_kr);
            } else {
              if (currentOrder.sauceId.indexOf(0) === 0) {
                if (sauce.sauce_id === 0) {
                  setItem(sauce.sauce_id, sauce.sauce_name_kr);
                }
              } else {
                if (sauce.sauce_id !== 0) {
                  setItem(sauce.sauce_id, sauce.sauce_name_kr);
                }
              }
            }
          }}
          cardCss={{
            border: currentOrder.sauceId.includes(sauce.sauce_id)
              ? '6px solid var(--green)'
              : '',
          }}
        >
          <img
            src={sauce.sauce_img ? sauce.sauce_img : None}
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
