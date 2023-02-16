/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

export const Container = styled.div({
  width: '820px',
  height: '655px',
  backgroundColor: '#fff',
  padding: '41px 64px 24px 64px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  boxShadow: '0 4px 10px 0 rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  marginTop: '100px',
});

export const Title = styled.h1({
  width: '200px',
  fontSize: '28px',
  margin: '0 0 24px 0',
  height: '33px',
  fontWeight: '500',
});

export const Input = styled.input(props => ({
  width: '804px',
  border: '1px solid #B8B8B8',
  borderRadius: '8px',
  padding: ' 0 0 0 16px',
  marginBottom: '24px',
  fontSize: '18px',
  outline: 'none',
  ':focus': {
    translate: '0 -2px',
    transition: 'all 0.2s',
    boxShadow: '0 4px 10px 0 rgba(0, 0, 0, 0.2)',
  },
}));

export const TextArea = styled.textarea({
  resize: 'none',
  width: '804px',
  border: '1px solid #B8B8B8',
  borderRadius: '8px',
  padding: ' 20px 0 0 16px',
  marginBottom: '20px',
  fontSize: '18px',
  outline: 'none',
  ':focus': {
    translate: '0 -2px',
    transition: 'all 0.2s',
    boxShadow: '0 4px 10px 0 rgba(0, 0, 0, 0.2)',
  },
});

export const Checkbox = styled.input({
  width: '24px',
  height: '24px',
  border: '1.2px solid #999999',
  borderRadius: '4.8px',
  margin: '0',
  cursor: 'pointer',
});

export const CheckboxText = styled.p({
  marginLeft: '9.6px',
  fontSize: '16px',
  fontWeight: '500',
});

export const RegistrationBox = styled.div({
  width: '134px',
  heigth: '35px',
  border: '1px solid #6695F1',
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  padding: '6.5px 0',
  cursor: 'pointer',
  ':hover': {
    translate: '0 -2px',
    transition: 'all 0.2s',
    boxShadow: '0 4px 10px 0 rgba(0, 0, 0, 0.2)',
  },
});

export const SubmitBTN = styled.button({
  width: '144px',
  height: '44px',
  backgroundColor: '#2E6EEB',
  fontSize: '20px',
  color: '#fff',
  borderRadius: '8px',
  border: '0',
  cursor: 'pointer',
  ':hover': {
    translate: '0 -2px',
    transition: 'all 0.2s',
    boxShadow: '0 4px 10px 0 rgba(0, 0, 0, 0.2)',
  },
});

export const RegistrationText = styled.p({
  fontSize: '16px',
  color: '#6695F1',
  fontWeight: '500',
});

export const Box = styled.div({
  display: 'flex',
  width: '820px',
  marginRight: '0',
  justifyContent: 'space-between',
});

export const FlexBox = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});
