/** @jsxImportSource @emotion/react */
import * as S from './style';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
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
            <li>Home</li>
          </Link>
          <Link to="/content/list">
            <li>List</li>
          </Link>
          <Link to="/user">
            <li>My page</li>
          </Link>
          <Link to="/about">
            <li>About Team</li>
          </Link>
        </S.FooterContentWrap>
        <S.FooterTeamTitle>
          Copyright 2023. the moment All rights reserved.
        </S.FooterTeamTitle>
      </div>
    </S.FooterWrap>
  );
};

export default Footer;
