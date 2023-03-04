/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';
import * as I from 'assets/svgs';

export const HeaderUser = () => {
  return (
    <div
      css={css`
        width: 7.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
      `}
    >
      <S.UserImg></S.UserImg>
      <S.UserName>
        <div>사용자</div>
      </S.UserName>
      <I.MoreInfoIcon />
    </div>
  );
};
