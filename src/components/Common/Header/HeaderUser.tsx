/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';
import * as I from 'assets/svgs';

interface UserProps {
  name: string;
  userImg: string;
}
interface props {
  header: UserProps;
}

export const HeaderUser = ({ header }: props) => {
  return (
    <div
      css={css`
        width: 7.5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
      `}
    >
      <S.UserImg backGroundImg={header.userImg}></S.UserImg>
      <S.UserName>
        <div>{header.name}</div>
      </S.UserName>
      <I.MoreInfoIcon />
    </div>
  );
};
