/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';

export const CheckBox = ({ text }: { text: string }) => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <S.Checkbox type="checkbox" />
      <S.CheckboxText>{text}</S.CheckboxText>
    </div>
  );
};
