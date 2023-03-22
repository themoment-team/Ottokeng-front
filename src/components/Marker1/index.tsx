/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';
import * as I from 'assets/svgs';
const Marker1 = () => {
  return (
    <S.MarkerBox>
      <img src={I.MarkerIcon}></img>
      <S.Shadow>
        <img src={I.ShadowIcon}></img>
      </S.Shadow>
    </S.MarkerBox>
  );
};

export default Marker1;
