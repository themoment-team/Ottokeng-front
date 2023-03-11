import styled from '@emotion/styled';

const backGroundColor = '#e3e3e9';
const textColor = '#696969';

export const FooterWrap = styled.div`
  width: 100%;
  height: 5.5rem;
  background-color: ${backGroundColor};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FooterContentWrap = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  width: 22.9375rem;
  height: 1.1875rem;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.1875rem;
  /* identical to box height */

  letter-spacing: 0.08em;

  color: ${textColor};

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

  color: ${textColor};
`;
