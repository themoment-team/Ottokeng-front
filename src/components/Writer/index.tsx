/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';
import * as I from 'assets/svgs';
export const Writer = () => {
  return (
    <S.BoardHeaderWrap>
      <div
        css={css`
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 10.375rem;
          height: 1.625rem;
        `}
      >
        <S.UserIcon />
        <S.UserNm>사용자</S.UserNm>
        <S.BoardPostDate>2002.01.01</S.BoardPostDate>
      </div>
      <S.ShowItemMapBtn
        css={css`
          cursor: pointer;
        `}
      >
        <div
          css={css`
            width: 110px;
            height: 19px;
            display: flex;
            justify-content: space-between;
          `}
        >
          <img src={I.MapIcon} />
          위치 확인하기
        </div>
      </S.ShowItemMapBtn>
    </S.BoardHeaderWrap>
  );
};

export default Writer;
