/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';
import * as C from '../../assets/svgs';
import { useEffect, useState } from 'react';

const GoogleLoginBtnBefore = () => {
  const parsedHash = new URLSearchParams(window.location.hash.substring(1));
  const accessToken = parsedHash.get('access_token');

  const client_id =
    '134995643753-9r3fe5gem5qlg6caijul7qlgrcr9el8c.apps.googleusercontent.com';

  const [isLogin, setIsLogin] = useState<boolean>(true);

  return (
    <S.Container>
      {isLogin ? (
        <div
          css={css`
            width: 440px;
            height: 164px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          `}
        >
          <a
            css={css`
              color: black;
            `}
            href="https://kauth.kakao.com/oauth/authorize?client_id=250c6af4efaac52ed213b342d00b5175&redirect_uri=http://localhost:8080/login/oauth2/code/kakao&response_type=code&client_secret=F8G7qfHyG1Ml10mqCZRugeqf8dsSJGDg"
          >
            <S.GoogleBtn
              color="#FEE500"
              onClick={() => {
                setIsLogin(!isLogin);
              }}
            >
              <img
                src={C.Kakao}
                css={css`
                  position: absolute;
                  left: 27px;
                `}
              />
              카카오 로그인
            </S.GoogleBtn>
          </a>
          <a href="https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.profilehttps://www.googleapis.com/auth/userinfo.email&client_id=134995643753-9r3fe5gem5qlg6caijul7qlgrcr9el8c.apps.googleusercontent.com&response_type=code&redirect_uri=http://localhost:3000/login/oauth2/code/google">
            <S.GoogleBtn
              onClick={() => {
                setIsLogin(false);
              }}
              color="#fff"
              css={css`
                border: 1px solid #999999;
                box-sizing: border-box;
                color: black;
              `}
            >
              <img
                src={C.Google}
                css={css`
                  position: absolute;
                  left: 24px;
                `}
              />
              Google로 로그인하기
            </S.GoogleBtn>
          </a>
        </div>
      ) : (
        <p>sex</p>
      )}
    </S.Container>
  );
};

export default GoogleLoginBtnBefore;
