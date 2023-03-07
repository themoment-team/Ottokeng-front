/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';
import GoogleLogin from 'react-google-login';
import { GoogleOAuthProvider } from '@react-oauth/google';

const GoogleLoginBtnBefore = () => {
  const parsedHash = new URLSearchParams(window.location.hash.substring(1));
  const accessToken = parsedHash.get('access_token');

  const client_id =
    '134995643753-9r3fe5gem5qlg6caijul7qlgrcr9el8c.apps.googleusercontent.com';

  return (
    <>
      <a href="https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email&client_id=134995643753-9r3fe5gem5qlg6caijul7qlgrcr9el8c.apps.googleusercontent.com&response_type=code&redirect_uri=http://localhost:3000/login/login/oauth2/code/google"></a>
      <S.GoogleBtn color="#FEE500">카카오 로그인</S.GoogleBtn>
      <S.GoogleBtn
        color="#fff"
        css={css`
          border: 1px solid #999999;
        `}
      >
        Google로 로그인하기
      </S.GoogleBtn>
    </>
  );
};

export default GoogleLoginBtnBefore;
