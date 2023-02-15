/** @jsxImportSource @emotion/react */
import * as S from './style';
import * as I from '../../assets/svgs';
import { css } from '@emotion/react';
import { StartBtnBox } from './StartBtnBox';
import { MarkerBox } from './MarkerBox';
import { MarkerBox2 } from './MarkerBox2';

const MainBox = ({
  title,
  submitText,
  description,
}: {
  title: string;
  submitText: string;
  description: string;
}) => {
  return (
    <S.Container>
      <S.Title
        css={css`
          font-style: normal;
          font-weight: 700;
          font-size: 72px;
          line-height: 86px;
          letter-spacing: -0.02em;
        `}
      >
        {title}
      </S.Title>
      <S.Description
        css={css`
          font-style: normal;
          font-weight: 500;
          font-size: 22px;
          line-height: 26px;
          letter-spacing: -0.01em;
        `}
      >
        {description}
      </S.Description>
      <StartBtnBox svg={<I.VectorIcon />} text="시작하기"></StartBtnBox>
      <MarkerBox svg={<I.MarkerIcon />} svg2={<I.ShadowIcon />}></MarkerBox>
      <MarkerBox2 svg={<I.MarkerIcon2 />} svg2={<I.ShadowIcon2 />}></MarkerBox2>
    </S.Container>
  );
};

export default MainBox;
