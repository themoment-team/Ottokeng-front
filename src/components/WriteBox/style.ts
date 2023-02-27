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
  margin-top: 6.25rem;
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
  &:focus {
    translate: 0 -0.125rem;
    transition: all 0.2s;
    box-shadow: 0 0.25rem 0.625rem 0 rgba(0, 0, 0, 0.2);
  }
`;

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

export const RegistrationBox = styled.label`
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

export const SubmitBTN = styled.button`
  width: 9rem;
  height: 2.75rem;
  background-color: ${P.blue2};
  font-size: 1.25rem;
  color: #fff;
  border-radius: 0.5rem;
  border: 0;
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

export const IMGModal = styled.dialog`
  width: 36.25rem;
  height: 47.5rem;
  background-color: ${P.white};
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  border: 0.0625rem solid black;
  align-items: center;
  padding: 0;
`;

export const DashedBox = styled.div`
  margin-top: 2.9375rem;
  width: 30rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='8' ry='8' stroke='%23A4A4A4FF' stroke-width='5' stroke-dasharray='6 14' stroke-dashoffset='80' stroke-linecap='square'/%3e%3c/svg%3e");
`;

export const TotalIMGBox = styled.div`
  width: 30.0625rem;
  height: 15.75rem;
  margin-top: 1.5rem;
  margin-bottom: 2.25rem;
`;

export const IMGBox = styled.div`
  display: flex;
  width: 30.0625rem;
  padding: 0.625rem 0;
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
`;
