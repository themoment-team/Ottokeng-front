/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';
const BoardTitle = () => {
  return (
    <div
      css={css`
        margin-bottom: 20px;
      `}
    >
      <S.BoardTitle>휴대폰을 분실했습니다.</S.BoardTitle>
      <S.BoardText>
        2023년 2월 8일 광주역에서 휴대폰을 잃어버렸음.
        <br /> 습득하신 분은 010-1234-5678로 연락주세요.
      </S.BoardText>
    </div>
  );
};

export default BoardTitle;
