/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';
const PlusBtn = ({ svg }: { svg: any }) => {
  return (
    <div>
      <S.PlusBtn>
        <S.Plus>{svg}</S.Plus>
      </S.PlusBtn>
    </div>
  );
};

export default PlusBtn;
