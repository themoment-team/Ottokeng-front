import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f1f1f5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  width: 6.25rem;
  height: 6.25rem;
  background-color: red;
`;

export const GoogleBtn = styled.div`
  cursor: pointer;
  width: 27.5rem;
  height: 4.5rem;
  background-color: ${props => props.color};
  border-radius: 0.5rem;

  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.8125rem;
  /* identical to box height */

  letter-spacing: 0.02em;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;
`;
