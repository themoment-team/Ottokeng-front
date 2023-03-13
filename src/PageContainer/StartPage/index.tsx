/** @jsxImportSource @emotion/react */
import * as S from './style';
import * as I from 'assets/svgs';
import { css } from '@emotion/react';
import { StartBtn, Marker1, Marker2 } from 'components';
import { Link } from 'react-router-dom';
const StartPage = ({
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
      <Link to="/main">
        <StartBtn svg={<I.VectorIcon />} text="시작하기"></StartBtn>
      </Link>
      <Marker1 svg={<I.MarkerIcon />} svg2={<I.ShadowIcon />}></Marker1>
      <Marker2 svg={<I.MarkerIcon2 />} svg2={<I.ShadowIcon2 />}></Marker2>
    </S.Container>
  );
};

export default StartPage;
