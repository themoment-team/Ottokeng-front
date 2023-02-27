import * as S from './style';

interface props {
  svg: string;
  text: string;
}

export const RegistrationBox = ({ svg, text }: props) => {
  return (
    <S.RegistrationBox>
      {<img src={svg} alt="" />}
      <S.RegistrationText>{text}</S.RegistrationText>
    </S.RegistrationBox>
  );
};
