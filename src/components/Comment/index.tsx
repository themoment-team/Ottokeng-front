/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import * as S from './style';
import * as I from 'assets/svgs';

const Comment = () => {
  return (
    <S.Container>
      <div
        css={css`
          width: 8.5625rem;
          height: 1.75rem;
          justify-content: space-between;
          display: flex;
          align-items: center;
        `}
      >
        <div
          css={css`
            position: absolute;
            right: 1.5rem;
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
          font-size: 0.9375rem;
          line-height: 1.125rem;
          /* identical to box height */

          letter-spacing: 0.05em;

          color: #777777;
          margin-top: 0.1875rem;

          margin-left: 2.5rem;
        `}
      >
        빨간 케이스 말하시는 거죠? 제가 가지고 있습니다!
      </div>
    </S.Container>
  );
};

export default Comment;
