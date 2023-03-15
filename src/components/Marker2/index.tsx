/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';
import * as I from 'assets/svgs';
const Marker2 = () => {
  return (
    <S.MarkerBox2>
      <img src={I.MarkerIcon2}></img>
      <S.Shadow2>
        <img src={I.ShadowIcon2}></img>
      </S.Shadow2>
    </S.MarkerBox2>
  );
};

export default Marker2;
