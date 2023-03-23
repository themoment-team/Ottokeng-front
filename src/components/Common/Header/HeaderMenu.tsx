/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import * as S from './style';
import * as I from 'assets/svgs';

export const HeaderMenu = () => {
  const location = useLocation();
  console.log(location);

  const select = (navPath: string) =>
    navPath === location.pathname && { color: '#2E6EEB' };

  return (
    <S.NavigationContentWrqp>
      <Link to="/">
        <S.LogoWrap>
          <img
            src={I.LogoIcon}
            css={css`
              padding-right: 1rem;
            `}
          />
          <p style={{ fontWeight: 500 }}>Ottokeng</p>
        </S.LogoWrap>
      </Link>
      <S.HeaderListWrap>
        <Link to="/">
          <S.HeaderList css={select('/')}>
            <S.Lists>홈</S.Lists>
          </S.HeaderList>
        </Link>
        <Link to="/content/list">
          <S.HeaderList css={select('/content/list')}>
            <S.Lists>전체보기</S.Lists>
          </S.HeaderList>
        </Link>
        <Link to="/user">
          <S.HeaderList css={select('/user')}>
            <S.Lists>마이 페이지</S.Lists>
          </S.HeaderList>
        </Link>
        <Link to="/about">
          <S.HeaderList css={select('/about')}>
            <S.Lists>팀소개</S.Lists>
          </S.HeaderList>
        </Link>
      </S.HeaderListWrap>
    </S.NavigationContentWrqp>
  );
};
