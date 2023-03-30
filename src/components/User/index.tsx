/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';
import axios, { all } from 'axios';

interface props {
  imageUrl: string | null;
  src?: string | undefined;
}
const User = ({ imageUrl }: props) => {
  const deleteUser = async () => {
    const res = await axios.delete(
      `https://server.ottokeng.site/my-page/delete`,
      {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      },
    );
  };
  const logOutUser = async () => {
    const res = await axios.delete(
      `https://server.ottokeng.site/my-page/logout`,
      {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      },
    );
  };
  const handleLogOut = () => {
    if (window.confirm('정말 로그아웃하시겠습니까 ?')) {
      localStorage.clear();
      logOutUser();
    }
  };
  const handleWithdraw = () => {
    if (window.confirm('정말 탈퇴하시겠습니까 ?')) {
      localStorage.clear();
      deleteUser();
    }
  };
  return (
    <>
      <S.UserBox>
        <S.UserImg>
          <S.Img image={localStorage.getItem('profileImg')} />
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
