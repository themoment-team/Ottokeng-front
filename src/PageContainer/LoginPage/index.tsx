/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';
import * as C from 'assets/svgs';
import { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

type Platform = 'kakao' | 'google';

interface IUser {
  name: string;
  imageUrl: string;
  role: string;
  tokenType: string;
  accessToken: string;
  refreshToken: string;
}

const LoginPage = () => {
  const [user, setUser] = useState<IUser | undefined>();
  const parsedHash = new URLSearchParams(window.location.hash.substring(1));
  const accessToken = parsedHash.get('access_token');
  const [isLogin, setIsLogin] = useState<boolean>(true);
  const dlwjddn = useLocation();
  const params = new URLSearchParams(dlwjddn.search);
  let loginCode = params.get('code');
  let platform = dlwjddn.pathname.slice(19);

  const Auth = {
    kakao:
      'https://kauth.kakao.com/oauth/authorize?client_id=250c6af4efaac52ed213b342d00b5175&redirect_uri=https://ottokeng.site/login/oauth2/code/kakao&response_type=code&client_secret=F8G7qfHyG1Ml10mqCZRugeqf8dsSJGDg',
    google:
      'https://accounts.google.com/o/oauth2/v2/auth?scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email&client_id=134995643753-9r3fe5gem5qlg6caijul7qlgrcr9el8c.apps.googleusercontent.com&response_type=code&redirect_uri=https://ottokeng.site/login/oauth2/code/google&access_type=offline',
  };

  const getUserInfo = async (code: string, platform: Platform) => {
    try {
      const { data } = await axios({
        url: `http://server.ottokeng.site/login/oauth/${platform}?code=${code}`,
        method: 'get',
      });
      console.log(data.name);
      setUser(data);
      // setHeader(data.name);
    } catch (err) {
      console.error(err);
    }
  };

  // useEffect(() => {
  //   if (dlwjddn.search !== '') {
  //     console.log('dd');
  //     getUserInfo(loginCode as string, platform as Platform);
  //   }
  // }, []);

  return (
    <S.Container>
      {dlwjddn.search === '' ? (
        <div
          css={css`
            width: 27.5rem;
            height: 10.25rem;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          `}
        >
          <a
            css={css`
              color: black;
            `}
            href={Auth.kakao}
          >
            <S.GoogleBtn color="#FEE500">
              <img
                src={C.Kakao}
                css={css`
                  position: absolute;
                  left: 1.6875rem;
                `}
              />
              카카오 로그인
            </S.GoogleBtn>
          </a>
          <a href={Auth.google}>
            <S.GoogleBtn
              color="#fff"
              css={css`
                color: black;
              `}
            >
              <img
                src={C.Google}
                css={css`
                  position: absolute;
                  left: 1.5rem;
                `}
              />
              Google로 로그인하기
            </S.GoogleBtn>
          </a>
        </div>
      ) : (
        <>
          <p>로그인 중입니다...</p>
          {getUserInfo(loginCode as string, platform as Platform)}
        </>
      )}
    </S.Container>
  );
};

export default LoginPage;
