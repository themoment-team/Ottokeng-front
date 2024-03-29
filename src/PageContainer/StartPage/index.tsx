/** @jsxImportSource @emotion/react */
import * as S from './style';
import * as I from 'assets/svgs';
import { css } from '@emotion/react';
import { StartBtn, Marker1, Marker2 } from 'components';
import { Link } from 'react-router-dom';
import * as C from 'components';
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
    <>
      <C.Header />
      <S.Container>
        <S.Title
          css={css`
            font-style: normal;
            font-weight: 700;
            font-size: 4.5rem;
            line-height: 5.375rem;
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
        <Link to="/">
          <StartBtn text="시작하기"></StartBtn>
        </Link>
        <Marker1></Marker1>
        <Marker2></Marker2>
      </S.Container>
      <C.Footer />
    </>
  );
};

export default StartPage;
