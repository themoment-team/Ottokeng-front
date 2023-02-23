import styled from '@emotion/styled';

export const Container = styled.div`
  width: 51.25rem;
  height: 39.875rem;
  background-color: #fff;
  padding: 2.5625rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 0.25rem 0.625rem 0 rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
`;

export const Title = styled.h1`
  width: 12.5rem;
  font-size: 1.75rem;
  margin: 0 0 1.5rem 0;
  // height: 2.0625rem;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 50.25rem;
  border: 0.0625rem solid #858585;
  border-radius: 0.5rem;
  padding: 0 0 0 1rem;
  margin-bottom: 1.5rem;
  font-size: 1.125rem;
  outline: none;
`;

export const Checkbox = styled.input`
  width: 1.5rem;
  height: 1.5rem;
  border: 0.075rem solid #999999;
  border-radius: 0.3rem;
  margin: 0;
  cursor: pointer;
`;

export const CheckboxText = styled.p`
  margin-left: 0.6rem;
  font-size: 1rem;
  font-weight: 500;
`;

export const RegistrationBox = styled.div`
  width: 8.375rem;
  height: 2.25rem;
  border: 0.0625rem solid #6695f1;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0.4063rem 0;
  cursor: pointer;
`;

export const SubmitBTN = styled.button`
  width: 9rem;
  height: 2.75rem;
  background-color: #2e6eeb;
  font-size: 1.25rem;
  color: #fff;
  border-radius: 0.5rem;
  border: 0;
  cursor: pointer;
`;

export const RegistrationText = styled.p`
  font-size: 1rem;
  color: #6695f1;
  font-weight: 500;
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
