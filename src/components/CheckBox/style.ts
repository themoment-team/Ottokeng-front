import styled from '@emotion/styled';
import P from 'assets/palette';

export const Checkbox = styled.input`
  width: 1.5rem;
  height: 1.5rem;
  border: 0.075rem solid ${P.gray2};
  border-radius: 0.3rem;
  margin: 0;
  cursor: pointer;
  outline: none;
`;

export const CheckboxText = styled.p`
  margin-left: 0.6rem;
  font-size: 1rem;
  font-weight: 500;
`;
