import styled from '@emotion/styled';
import P from 'assets/palette';

export const Container = styled.div`
  width: 51.25rem;
  height: 40.9375rem;
  background-color: ${P.white};
  padding: 2.5625rem 4rem 1.5rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 0.25rem 0.625rem 0 rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  margin-top: 8.25rem;
`;

export const Title = styled.h1`
  width: 12.5rem;
  font-size: 1.75rem;
  margin: 0 0 1.5rem 0;
  height: 2.0625rem;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 50.25rem;
  border: 0.0625rem solid ${P.gray1};
  border-radius: 0.5rem;
  padding-left: 1rem;
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
  outline: none;
  &:focus {
    translate: 0 -0.125rem;
    transition: all 0.2s;
    box-shadow: 0 0.25rem 0.625rem 0 rgba(0, 0, 0, 0.2);
  }
`;

export const TextArea = styled.textarea`
  resize: none;
  width: 50.25rem;
  border: 0.0625rem solid ${P.gray1};
  border-radius: 0.5rem;
  padding: 1.25rem 0 0 1rem;
  margin-bottom: 1.25rem;
  font-size: 1.125rem;
  outline: none;
  &::placeholder {
    color: ${P.gray2};
  }
  &:focus {
    translate: 0 -0.125rem;
    transition: all 0.2s;
    box-shadow: 0 0.25rem 0.625rem 0 rgba(0, 0, 0, 0.2);
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

export const Box = styled.div`
  display: flex;
  width: 51.25rem;
  margin-right: 0;
  justify-content: space-between;
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
