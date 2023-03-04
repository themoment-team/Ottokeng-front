import styled from '@emotion/styled';

export const FooterWrap = styled.div`
  width: 100%;
  height: 88px;
  background-color: #e3e3e9;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterContentWrap = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  width: 367px;
  height: 19px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  letter-spacing: 0.08em;

  color: #696969;

  list-style: none;
  > li {
    cursor: pointer;
  }
`;

export const FooterTeamTitle = styled.div`
  width: 22.9375rem;
  height: 1.3125rem;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.3125rem;

  color: #696969;
`;
