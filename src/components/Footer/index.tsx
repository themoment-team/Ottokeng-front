/** @jsxImportSource @emotion/react */
import * as S from './style';
import { css } from '@emotion/react';
const Footer = () => {
  return (
    <>
      <S.FooterWrap>
        <div
          css={css`
            width: 1345px;
            height: 21px;

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
          <div
            css={css`
              width: 367px;
              height: 21px;

              font-family: 'Pretendard';
              font-style: normal;
              font-weight: 400;
              font-size: 18px;
              line-height: 21px;

              color: #696969;
            `}
          >
            Copyright 2023. the moment All rights reserved.
          </div>
        </div>
      </S.FooterWrap>
    </>
  );
};

export default Footer;
