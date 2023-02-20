import { useEffect, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';
import MainGrid from '../common/MainGrid';
import Card from '../common/Card';
import itemRecoilState from '../../recoil/itemRecoilState';

export default function Index() {
  const queryClient = useQueryClient();

  /** 프리페칭 데이터 */
  const prefetchData = queryClient.getQueryData(['combo']);
  const comboData = prefetchData.data;

  return (
    <MainGrid>
      {comboData.map((combo) => (
        <Card key={combo.combo_id}>
          <img
            src={combo.combo_img}
            alt={combo.combo_name}
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
              {combo.combo_name}
            </p>
            {/* <p
              css={{
                color: 'var(--gray)',
                fontSize: '1rem',
                fontWeight: 500,
              }}
            >
              {combo.combo_name_en}
            </p> */}
          </div>
        </Card>
      ))}
    </MainGrid>
  );
}
