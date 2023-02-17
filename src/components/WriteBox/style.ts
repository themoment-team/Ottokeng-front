/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

export const Container = styled.div`
  width: 820px;
  height: 638px;
  background-color: #fff;
  padding: 41px 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

export const Title = styled.h1`
  width: 200px;
  font-size: 28px;
  margin: 0 0 24px 0;
  // height: 33px;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 804px;
  border: 1px solid #858585;
  border-radius: 8px;
  padding: 0 0 0 16px;
  margin-bottom: 24px;
  font-size: 18px;
  outline: none;
`;

export const Checkbox = styled.input`
  width: 24px;
  height: 24px;
  border: 1.2px solid #999999;
  border-radius: 4.8px;
  margin: 0;
  cursor: pointer;
`;

export const CheckboxText = styled.p`
  margin-left: 9.6px;
  font-size: 16px;
  font-weight: 500;
`;

export const RegistrationBox = styled.div`
  width: 134px;
  height: 36px;
  border: 1px solid #6695f1;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 6.5px 0;
  cursor: pointer;
`;

export const SubmitBTN = styled.button`
  width: 144px;
  height: 44px;
  background-color: #2e6eeb;
  font-size: 20px;
  color: #fff;
  border-radius: 8px;
  border: 0;
  cursor: pointer;
`;

export const RegistrationText = styled.p`
  font-size: 16px;
  color: #6695f1;
  font-weight: 500;
`;

export const Box = styled.div`
  display: flex;
  width: 820px;
  margin-right: 0;
  justify-content: space-between;
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
