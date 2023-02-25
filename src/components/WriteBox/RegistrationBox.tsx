import * as S from './style';

interface props {
  svg: string;
  text: string;
  fileInput: string;
}

export const RegistrationBox = ({ svg, text, fileInput }: props) => {
  return (
    <S.RegistrationBox htmlFor={fileInput}>
      {<img src={svg} />}
      <S.RegistrationText>{text}</S.RegistrationText>
    </S.RegistrationBox>
  );
};
