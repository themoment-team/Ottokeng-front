/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';
import axios from 'axios';

interface props {
  imageUrl: string;
}

const User = ({ imageUrl }: props) => {
  const deleteUser = async () => {
    const res = await axios.delete(`https://도메인주소//my-page/delete`, {
      headers: {
        Authorization: 'accessToken',
      },
    });
  };
  const logOutUser = async () => {
    const res = await axios.delete(`https://도메인주소//my-page/logout`, {
      headers: {
        Authorization: 'accessToken',
      },
    });
  };
  const handleLogOut = () => {
    if (window.confirm('정말 로그아웃하시겠습니까 ?')) {
      deleteUser();
    }
  };
  const handleWithdraw = () => {
    if (window.confirm('정말 탈퇴하시겠습니까 ?')) {
      deleteUser();
    }
  };
  return (
    <>
      <S.UserBox>
        <S.UserImg>
          <img src={imageUrl} />
        </S.UserImg>
        <S.LoginBox>
          <S.LogOut onClick={handleLogOut}>로그아웃</S.LogOut>
          <S.Bar></S.Bar>
          <S.UserDelete onClick={handleWithdraw}>회원탈퇴</S.UserDelete>
        </S.LoginBox>
      </S.UserBox>
    </>
  );
};

export default User;
