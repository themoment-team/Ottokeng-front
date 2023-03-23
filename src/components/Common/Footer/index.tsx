/** @jsxImportSource @emotion/react */
import * as S from './style';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div
      css={css`
        width: 100%;
        min-height: 100%;
        z-index: 1000000000000000000000;
        position: relative;
      `}
    >
      <S.FooterWrap>
        <div
          css={css`
            width: 84.0625rem;
            height: 1.3125rem;
            display: flex;
            justify-content: space-between;
          `}
        >
          <S.FooterContentWrap>
            <Link to="/">
              <S.FooterList>Home</S.FooterList>
            </Link>
            <Link to="/content/list">
              <S.FooterList>List</S.FooterList>
            </Link>
            <Link to="/user">
              <S.FooterList>My page</S.FooterList>
            </Link>
            <Link to="/about">
              <S.FooterList>About Team</S.FooterList>
            </Link>
          </S.FooterContentWrap>
          <S.FooterTeamTitle>
            Copyright 2023. the moment All rights reserved.
          </S.FooterTeamTitle>
        </div>
      </S.FooterWrap>
    </div>
  );
};

export default Footer;
