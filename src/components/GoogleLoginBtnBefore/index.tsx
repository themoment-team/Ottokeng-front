/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';
import * as C from '../../assets/svgs';

const GoogleLoginBtnBefore = () => {
  const parsedHash = new URLSearchParams(window.location.hash.substring(1));
  const accessToken = parsedHash.get('access_token');

  const client_id =
    '134995643753-9r3fe5gem5qlg6caijul7qlgrcr9el8c.apps.googleusercontent.com';

  return (
    <S.Container>
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
          href="http://localhost:3000/login/oauth/authorize?client_id=707caac4714842c82deade3c3fe99ea8&redirect_uri=http://localhost:3000/login/&response_type=code"
        >
          <S.GoogleBtn color="#FEE500">
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

        <a href="https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email&client_id=134995643753-9r3fe5gem5qlg6caijul7qlgrcr9el8c.apps.googleusercontent.com&response_type=code&redirect_uri=http://localhost:3000/login/login/oauth2/code/google">
          <S.GoogleBtn
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
    </S.Container>
  );
};

export default GoogleLoginBtnBefore;
