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
          <img src={I.LogoIcon} />
          Ottokeng
        </S.LogoWrap>
      </Link>
      <S.HeaderListWrap>
        <Link to="/">
          <S.HeaderList css={select('/')}>홈</S.HeaderList>
        </Link>
        <Link to="/content/list">
          <S.HeaderList css={select('/content/list')}>전체보기</S.HeaderList>
        </Link>
        <Link to="/user">
          <S.HeaderList css={select('/user')}>마이 페이지</S.HeaderList>
        </Link>
        <Link to="/about">
          <S.HeaderList css={select('/about')}>팀소개</S.HeaderList>
        </Link>
      </S.HeaderListWrap>
    </S.NavigationContentWrqp>
  );
};
