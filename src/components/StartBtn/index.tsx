/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';
import * as I from 'assets/svgs';

const StartBtn = ({ text }: { text: string }) => {
  return (
    <S.StartBtnBox>
      <S.StartBtn>{text}</S.StartBtn>
      <img src={I.VectorIcon}></img>
    </S.StartBtnBox>
  );
};

export default StartBtn;
