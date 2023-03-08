import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 100px;
  height: 100px;
  background-color: red;
`;

export const GoogleBtn = styled.div`
  cursor: pointer;
  width: 440px;
  height: 72px;
  background-color: ${props => props.color};
  border-radius: 8px;

  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */

  letter-spacing: 0.02em;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`;
