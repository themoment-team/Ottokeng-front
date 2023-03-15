/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';
import * as I from 'assets/svgs';
const PlusBtn = () => {
  return (
    <div>
      <S.PlusBtn>
        <S.Plus>
          <I.PlusIcon />
        </S.Plus>
      </S.PlusBtn>
    </div>
  );
};

export default PlusBtn;
