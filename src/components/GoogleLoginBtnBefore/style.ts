import styled from '@emotion/styled';

export const Button = styled.button`
  width: 100px;
  height: 100px;
  background-color: red;
`;

export const GoogleBtn = styled.div`
  width: 440px;
  height: 72px;
  background-color: ${props => props.color};
  border-radius: 8px;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  /* identical to box height */

  letter-spacing: 0.02em;

  display: flex;
  align-items: center;
  justify-content: center;
`;
