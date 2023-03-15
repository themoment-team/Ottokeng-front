/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';
import * as I from 'assets/svgs';
const Marker1 = () => {
  return (
    <S.MarkerBox>
      <I.MarkerIcon />
      <S.Shadow>
        <I.ShadowIcon />
      </S.Shadow>
    </S.MarkerBox>
  );
};

export default Marker1;
