/** @jsxImportSource @emotion/react */
import * as S from './style';
import { css } from '@emotion/react';
const Footer = () => {
  return (
    <>
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
            <li>Home</li>
            <li>List</li>
            <li>My page</li>
            <li>About Team</li>
          </S.FooterContentWrap>
          <S.FooterTeamTitle>
            Copyright 2023. the moment All rights reserved.
          </S.FooterTeamTitle>
        </div>
      </S.FooterWrap>
    </>
  );
};

export default Footer;
