/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';
import { HeaderMenu } from './HeaderMenu';
import { HeaderSearch } from './HeaderSearch';
import { HeaderUser } from './HeaderUser';
const Header = () => {
  return (
    <>
      <S.Container>
        <S.HeaderContentWrap>
          <HeaderMenu />
          <div
            css={css`
              width: 38.5625rem;
              display: flex;
              justify-content: space-between;
            `}
          >
            <HeaderSearch />
            <HeaderUser />
          </div>
        </S.HeaderContentWrap>
      </S.Container>
    </>
  );
};

export default Header;
