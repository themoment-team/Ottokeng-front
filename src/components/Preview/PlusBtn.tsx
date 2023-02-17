/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';
export const PlulsBtn = ({ svg }: { svg: any }) => {
  return (
    <div>
      <S.PlusBtn>
        <S.Plus>{svg}</S.Plus>
      </S.PlusBtn>
    </div>
  );
};
