import * as S from './style';
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import queryString from 'query-string';

const GoogleLoginBtnBefore = () => {
  const { param } = useParams();
  const dlwjddn = useLocation();
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
    </>
  );
};

export default GoogleLoginBtnBefore;
