import * as S from './style';
import * as I from 'assets/svgs';

export const HeaderMenu = () => {
  return (
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
  );
};