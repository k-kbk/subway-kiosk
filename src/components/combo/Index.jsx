import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';
import {
  currentOrderState,
  currentOrderKRState,
} from '../../recoil/current/index';
import MainGrid from '../common/MainGrid';
import Card from '../common/Card';

export default function Index() {
  const queryClient = useQueryClient();
  const [currentOrder, setCurrentOrder] = useRecoilState(currentOrderState);
  const [currentOrderKR, setCurrentOrderKR] =
    useRecoilState(currentOrderKRState);
  const [prevComboPrice, setPrevComboPrice] = useState(0);
  /** 프리페칭 데이터 */
  const prefetchData = queryClient.getQueryData(['combo']);
  const comboData = prefetchData.data;

  return (
    <MainGrid>
      {comboData.map((combo) => (
        <Card
          key={combo.combo_id}
          onClick={() => {
            setCurrentOrder({
              ...currentOrder,
              comboId: combo.combo_id,
              price: currentOrder.price - prevComboPrice + combo.combo_price,
            });
            setCurrentOrderKR({
              ...currentOrderKR,
              combo: combo.combo_name_kr,
            });
            setPrevComboPrice(combo.combo_price);
          }}
          cardCss={{
            border:
              combo.combo_id === currentOrder.comboId
                ? '6px solid var(--green)'
                : '',
          }}
        >
          <img
            src={combo.combo_img}
            alt={combo.combo_name_kr}
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
              {combo.combo_name_kr}
            </p>
            <p
              css={{
                color: 'var(--gray)',
                fontSize: '1rem',
                fontWeight: 500,
              }}
            >
              {combo.combo_name_en}
            </p>
            {combo.combo_id !== 1 && (
              <p
                css={{
                  color: 'var(--green)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  lineHeight: 1.2,
                  marginTop: '0.5rem',
                }}
              >
                {`+${combo.combo_price.toLocaleString()}원`}
              </p>
            )}
          </div>
        </Card>
      ))}
    </MainGrid>
  );
}
