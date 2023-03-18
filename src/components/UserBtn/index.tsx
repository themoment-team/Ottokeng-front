/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';
import axios from 'axios';
import { ReactHTMLElement, useState } from 'react';
interface prop {
  title: String;
  key: Number;
}

const UserBtn = ({ title }: prop) => {
  const [onclick, setOnclick] = useState<Boolean>(false);
  return (
    <S.Div>
      <S.UserBtn>{title}</S.UserBtn>
    </S.Div>
  );
};

export default UserBtn;
