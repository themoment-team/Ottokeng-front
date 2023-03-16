/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';

interface props {
  text: string;
  value: string;
  handleCheck: any;
  id: string;
}

const CheckBox = ({ text, value, handleCheck, id }: props) => {
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

export default CheckBox;
