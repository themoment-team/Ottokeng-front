/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';
import * as I from 'assets/svgs';
const Header = () => {
  return (
    <>
      <S.Container>
        <S.HeaderContentWrap>
          <S.NavigationContentWrqp>
            <S.LogoWrap>
              <I.LogoIcon />
              Ottokeng
            </S.LogoWrap>
            <S.HeaderListWrap>
              <li>홈</li>
              <li>전체보기</li>
              <li>마이 페이지</li>
              <li>팀소개</li>
            </S.HeaderListWrap>
          </S.NavigationContentWrqp>
          <div
            css={css`
              width: 38.5625rem;
              display: flex;
              justify-content: space-between;
            `}
          >
            <div
              css={css`
                width: 28.75rem;
                height: 2.75rem;
                position: relative;

                display: flex;
                align-items: center;
              `}
            >
              <S.SearchBox
                type="text"
                placeholder="잃어버린 분실물을 찾아보세요!"
              />
              <div
                css={css`
                  position: absolute;
                  right: 1rem;
                `}
              >
                <I.SearchIcon />
              </div>
            </div>
            <div
              css={css`
                width: 7.5rem;
                display: flex;
                justify-content: space-between;
              `}
            >
              <S.UserImg></S.UserImg>
              <S.UserNm>
                <div>사용자</div>
              </S.UserNm>
              <I.MoreInfoIcon />
            </div>
          </div>
        </S.HeaderContentWrap>
      </S.Container>
    </>
  );
};

export default Header;
