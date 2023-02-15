/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';
export const StartBtnBox = ({ svg, text }: { svg: any; text: string }) => {
  return (
    <S.StartBtnBox>
      <S.StartBtn>{text}</S.StartBtn>
      {svg}
    </S.StartBtnBox>
  );
};
