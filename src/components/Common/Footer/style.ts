import styled from '@emotion/styled';

export const FooterWrap = styled.div`
  width: 100%;
  height: 5.5rem;
  background-color: #e3e3e9;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
`;

export const FooterContentWrap = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  width: 22.9375rem;
  height: 1.1875rem;
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.1875rem;
  /* identical to box height */

  letter-spacing: 0.08em;

  color: #696969;

  list-style: none;
  > li {
    cursor: pointer;
  }
`;

export const FooterTeamTitle = styled.div`
  height: 1.3125rem;

  font-style: normal;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.3125rem;

  color: #696969;
`;

export const FooterList = styled.li`
  color: #696969;
`;
