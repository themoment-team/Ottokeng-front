import * as S from './style';

interface props {
  svg: string;
  text: string;
  onClick: any;
}

const RegistrationBox = ({ svg, text, onClick }: props) => {
  return (
    <S.RegistrationBox onClick={onClick}>
      {<img src={svg} alt="" />}
      <S.RegistrationText>{text}</S.RegistrationText>
    </S.RegistrationBox>
  );
};

export default RegistrationBox;
