/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';

export const CheckBoxs = ({ text }: { text: string }) => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
      `}
    >
      <S.Checkbox type="checkbox" />
      <S.CheckboxText>{text}</S.CheckboxText>
    </div>
  );
};
