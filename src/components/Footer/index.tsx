/** @jsxImportSource @emotion/react */
import * as S from './style';
import { css } from '@emotion/react';
const Footer = () => {
  return (
    <S.Container>
      <S.FooterContentWrap
        css={css`
          position: absolute;
          left: 292px;
        `}
      >
        <S.FooterContent>Home</S.FooterContent>
        <S.FooterContent>List</S.FooterContent>
        <S.FooterContent>My Page</S.FooterContent>
        <S.FooterContent>About Team</S.FooterContent>
      </S.FooterContentWrap>
      <div
        css={css`
          font-family: 'Pretendard';
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 21px;
          color: #6f6f6f;

          position: absolute;
          left: 1250px;
        `}
      >
        <span>Copyright 2023. the moment All rights reserved.</span>
      </div>
    </S.Container>
  );
};

export default Footer;
