/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';

interface args {
  text: string;
  value: string;
  handleCheck: any;
  id: string;
}

export const CheckBox = ({ text, value, handleCheck, id }: args) => {
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <S.Checkbox type="checkbox" value={value} onClick={handleCheck} id={id} />
      <S.CheckboxText>{text}</S.CheckboxText>
    </div>
  );
};
