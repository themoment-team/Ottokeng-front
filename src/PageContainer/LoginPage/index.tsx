/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';
import * as C from 'assets/svgs';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import After from './After';

type Platform = 'kakao' | 'google';

const LoginPage = () => {
  const navigate = useNavigate();
  const currentUrl = useLocation();
  const params = new URLSearchParams(currentUrl.search);
  let loginCode = params.get('code');
  let platform = currentUrl.pathname.slice(19);

  const Auth = {
    kakao: process.env.REACT_APP_KAKAO_URL,
    google: process.env.REACT_APP_GOOGLE_URL,
  };

  localStorage.setItem('token', '!111');

  const getUserInfo = async (code: string, platform: Platform) => {
    try {
      const { data } = await axios({
        url: `https://server.ottokeng.site/login/oauth/${platform}?code=${code}`,
        method: 'get',
      });
      console.log(data.name);
      localStorage.setItem('name', data.name);
      localStorage.setItem('profileImg', data.imageUrl);
      localStorage.setItem('token', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
      navigate('/');
      // setHeader(data.name);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <S.Container>
      {currentUrl.search === '' ? (
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
        <After
          loginCode={loginCode}
          platform={platform as Platform}
          getUserInfo={getUserInfo}
        />
      )}
    </S.Container>
  );
};

export default LoginPage;
