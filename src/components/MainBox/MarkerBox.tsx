/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';
export const MarkerBox = ({ svg, svg2 }: { svg: any; svg2: any }) => {
  return (
    <S.MarkerBox>
      {svg}
      <S.Shadow>{svg2}</S.Shadow>
    </S.MarkerBox>
  );
};
