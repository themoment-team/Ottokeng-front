import styled from '@emotion/styled';
import P from 'assets/palette';

export const IMGBox = styled.div`
  display: flex;
  width: 30.0625rem;
  height: 2.25rem;
  align-items: center;
`;

export const IMGFile = styled.img`
  width: 2rem;
  height: 2.25rem;
  margin-right: 1rem;
`;

export const IMGContentBox = styled.div`
  width: 22.5rem;
  height: 2.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const IMGTitle = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
`;

export const Range = styled.input`
  width: 22.5rem;
  height: 0.25rem;
  outline: none;
  margin-left: -0.0625rem;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    outline: none;
    background: transparent;
    opacity: 0;
  }
`;

export const Line = styled.div`
  width: 30rem;
  height: 0.0625rem;
  background-color: ${P.gray4};
  margin: 0.5rem 0;
`;
