/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import * as S from './style';
import * as I from 'assets/svgs';

const Comment = () => {
  return (
    <S.Container>
      <div
        css={css`
          width: 137px;
          height: 28px;
          justify-content: space-between;
          display: flex;
          align-items: center;
        `}
      >
        <div
          css={css`
            position: absolute;
            right: 24px;
          `}
        >
          <I.Hamburger />
        </div>
        <S.UserIcon></S.UserIcon>
        <S.BoardPostDate>이정우</S.BoardPostDate>
        <S.BoardPostDate>2002.01.01</S.BoardPostDate>
      </div>
      <div
        css={css`
          font-family: 'Pretendard';
          font-style: normal;
          font-weight: 400;
          font-size: 15px;
          line-height: 18px;
          /* identical to box height */

          letter-spacing: 0.05em;

          color: #777777;
          margin-top: 3px;

          margin-left: 16px;
        `}
      >
        빨간 케이스 말하시는 거죠? 제가 가지고 있습니다!
      </div>
    </S.Container>
  );
};

export default Comment;
