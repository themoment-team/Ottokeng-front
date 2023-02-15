/** @jsxImportSource @emotion/react */
import { Container } from './style';
import { css } from '@emotion/react';
import * as S from './style';
import * as I from '../../assets/svgs';
const Header = () => {
  return (
    <>
      <S.Container>
        <div
          css={css`
            position: absolute;
            top: 40px;
            left: 184px;
          `}
        >
          <I.LogoIcon />
        </div>
        <S.Title>Ottokeng</S.Title>
        <S.HomeTitle>홈</S.HomeTitle>
        <S.AllBoards>전체보기</S.AllBoards>
        <S.MyPageTitle>마이페이지</S.MyPageTitle>
        <S.TeamIntroTitle>팀소개</S.TeamIntroTitle>
        <S.TitleSearchBox placeholder="잃어버린 분실물을 찾아보세요!" />
        <div
          css={css`
            position: absolute;
            top: 50px;
            left: 1536px;
            cursor: pointer;
          `}
        >
          <I.SearchIcon />
        </div>
        <S.TitleProfile />
        <S.TitleUserName>사용자</S.TitleUserName>
        <div
          css={css`
            position: absolute;
            width: 16px;
            height: 16px;
            left: 1720px;
            top: 52px;
            cursor: pointer;
          `}
        >
          <I.MoreInfoIcon />
        </div>
      </S.Container>
    </>
  );
};

export default Header;
