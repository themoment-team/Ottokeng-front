import * as S from './style';
import { css } from '@emotion/react';

interface arg {
  svg: any;
  text: string;
  fileInput: string;
}

export const RegistrationBox = ({ svg, text, fileInput }: arg) => {
  return (
    <S.RegistrationBox htmlFor={fileInput}>
      {svg}
      <S.RegistrationText>{text}</S.RegistrationText>
    </S.RegistrationBox>
  );
};
