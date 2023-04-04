/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
interface props {
  imageUrl: string | null;
  src?: string | undefined;
}

const User = ({ imageUrl }: props) => {
  const navigate = useNavigate();
  const deleteUser = async () => {
    const res = await axios.delete(
      `https://server.ottokeng.site/my-page/delete`,
      {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      },
    );
    console.log(res);
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
    console.log(res);
  };
  const handleLogOut = () => {
    if (window.confirm('정말 로그아웃하시겠습니까 ?')) {
      logOutUser();
      localStorage.clear();
      navigate('/start');
    }
  };
  const handleWithdraw = () => {
    if (window.confirm('정말 탈퇴하시겠습니까 ?')) {
      deleteUser();
      localStorage.clear();
      navigate('/start');
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
