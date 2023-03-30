/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';
import * as I from 'assets/svgs';

export const HeaderUser = () => {
  return (
    <div
      css={css`
        width: 104px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      `}
    >
      <S.UserImg bGImg={localStorage.getItem('profileImg')}></S.UserImg>
      <S.UserName>
        {localStorage.getItem('name') ?? <div>비회원</div>}
      </S.UserName>
    </div>
  );
};
