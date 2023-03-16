import styled from '@emotion/styled';
import P from 'assets/palette';

export const RegistrationBox = styled.div`
  width: 8.375rem;
  height: 1.3125rem;
  border: 0.0625rem solid ${P.blue1};
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0.4063rem 0;
  cursor: pointer;
  &:hover {
    translate: 0 -0.125rem;
    transition: all 0.2s;
    box-shadow: 0 0.25rem 0.625rem 0 rgba(0, 0, 0, 0.2);
  }
`;

export const RegistrationText = styled.p`
  font-size: 1rem;
  color: ${P.blue1};
  font-weight: 500;
`;
