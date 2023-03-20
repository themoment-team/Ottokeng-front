import styled from '@emotion/styled';
import P from 'assets/palette';

export const MapModal = styled.div`
  width: 52.5rem;
  height: 38rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${P.white};
  padding: 2.5rem 0 2rem 0;
`;

export const Map = styled.map`
  width: 47.5rem;
  height: 26.25rem;
  background-color: ${P.gray1};
  border-radius: 0.5rem;
`;

export const SubmitBTN = styled.button`
  width: 9rem;
  height: 2.75rem;
  background-color: ${P.blue2};
  font-size: 1.25rem;
  color: #fff;
  border-radius: 0.5rem;
  border: 0;
  cursor: pointer;
  outline: none;
`;
