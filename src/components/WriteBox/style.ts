/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import * as I from '../../assets/svgs';

export const Container = styled.div({
  width: '820px',
  height: '720px',
  backgroundColor: '#fff',
  padding: '41px 64px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const Title = styled.h1({
  width: '200px',
  fontSize: '28px',
  margin: '0 0 24px 0',
});

export const Input = styled.input({
  width: '804px',
  border: '1px solid #858585',
  borderRadius: '8px',
  padding: ' 0 0 0 16px',
  marginBottom: '24px',
});

export const Checkbox = styled.input({
  width: '24px',
  height: '24px',
  border: '1px solid #999999',
  borderRadius: '4.8px',
});

export const CheckboxText = styled.p({
  marginLeft: '9.6px',
  fontSize: '16px',
});

export const RegistrationBox = styled.div({
  width: '136px',
  heigth: '36px',
  border: '1px solid #6695F1',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
});

export const SubmitBTN = styled.button({
  width: '144px',
  height: '44px',
  backgroundColor: '#6695F1',
});

export const RegistrationText = styled.p({
  fontSize: '16px',
  color: '#6695F1',
});

export const Box = styled.div({
  display: 'flex',
  width: '820px',
  marginRight: '0',
  justifyContent: 'space-evenly',
});
