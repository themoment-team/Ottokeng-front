import * as S from './style';
import { css } from '@emotion/react';

export const RegistrationBox = ({ svg, text }: { svg: any; text: string }) => {
  return (
    <S.RegistrationBox>
      {svg}
      <S.RegistrationText>{text}</S.RegistrationText>
    </S.RegistrationBox>
  );
};
