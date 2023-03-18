import P from 'assets/palette';
import styled from '@emotion/styled';

export const IMGModal = styled.div`
  width: 36.25rem;
  height: 47.5rem;
  background-color: ${P.white};
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  border: 0;
  align-items: center;
  padding: 0;
`;

export const DashedBox = styled.label`
  margin-top: 2.9375rem;
  width: 30rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%23A4A4A4FF' stroke-width='5' stroke-dasharray='6 14' stroke-dashoffset='80' stroke-linecap='square'/%3e%3c/svg%3e");
`;

export const TotalIMGBox = styled.div`
  width: 31.3125rem;
  height: 15.75rem;
  margin: 1.5rem 0 2.25rem 1.25rem;
  overflow: auto;
  &::-webkit-scrollbar {
    background-color: white;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${P.gray3};
    border-radius: 1.25rem;
    background-clip: padding-box;
    border: 0.3125rem solid transparent;
  }
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
