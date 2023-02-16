import * as S from './style';
import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { gapi } from 'gapi-script';

const GoogleLoginBtnBefore = () => {
  const parsedHash = new URLSearchParams(window.location.hash.substring(1));
  const accessToken = parsedHash.get('access_token');

  const client_id =
    '134995643753-9r3fe5gem5qlg6caijul7qlgrcr9el8c.apps.googleusercontent.com';

  useEffect(() => {
    gapi.load('client:auth2', () => {
      gapi.auth2.init({ client_id: client_id });
    });
  }, []);
  const { param } = useParams();
  const dlwjddn = useLocation();

  const onSuccess = (res: any) => {
    console.log(res);
  };

  const onFailure = (res: any) => {
    console.log(res);
  };

  return (
    <>
      <a href="https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email&client_id=134995643753-9r3fe5gem5qlg6caijul7qlgrcr9el8c.apps.googleusercontent.com&response_type=code&redirect_uri=http://localhost:3000/login/login/oauth2/code/google">
        구글 로그인
      </a>
      <button
        onClick={() => {
          console.log(dlwjddn);
        }}
      >
        ddd
      </button>
      <GoogleOAuthProvider clientId={client_id}>
        <GoogleLogin
          clientId={client_id}
          onSuccess={onSuccess}
          onFailure={onFailure}
          buttonText="구글로 로그인하기"
        />
      </GoogleOAuthProvider>

      <button
        onClick={() => {
          window.location.href =
            'https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email&client_id=134995643753-9r3fe5gem5qlg6caijul7qlgrcr9el8c.apps.googleusercontent.com&response_type=code&redirect_uri=http://localhost:3000/login/login/oauth2/code/google';
        }}
      >
        응아니야
      </button>
    </>
  );
};

export default GoogleLoginBtnBefore;
