import styled from '@emotion/styled';

export const Container = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 120px;
`;

export const HeaderContentWrap = styled.div`
  width: 1552px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavigationContentWrqp = styled.div`
  width: 636px;
  height: 120px;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const LogoWrap = styled.div`
  width: 165px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 35px;
  letter-spacing: -0.03em;

  color: #191919;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderListWrap = styled.div`
  width: 407px;
  justify-content: space-between;
  list-style: none;
  display: flex;
  padding: 0;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
`;

export const SearchProfileWrap = styled.div`
  width: 460px;
  height: 44px;

  background: #f1f1f5;
  border-radius: 22px;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

export const SearchBox = styled.input`
  width: 460px;
  height: 44px;

  padding-left: 20px;

  border: none;
  background: #f1f1f5;
  border-radius: 22px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #999999;
`;

export const UserImg = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 100%;
  background-color: gray;
`;

export const UserNm = styled.div`
  display: flex;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 26px;
  letter-spacing: 0.05em;

  color: #191919;
`;
