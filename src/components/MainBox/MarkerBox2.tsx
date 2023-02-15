/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';
export const MarkerBox2 = ({ svg, svg2 }: { svg: any; svg2: any }) => {
  return (
    <S.MarkerBox2>
      {svg}
      <S.Shadow2>{svg2}</S.Shadow2>
    </S.MarkerBox2>
  );
};
