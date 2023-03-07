import * as S from './style';
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const GoogleLoginBtnAfter = ({ setHeader }: { setHeader: any }) => {
  interface IUser {
    name: string;
    imageUrl: string;
    role: string;
    tokenType: string;
    accessToken: string;
    refreshToken: string;
  }

  const [ccode, setCcode] = useState<string | null>('');
  const [user, setUser] = useState<IUser | undefined>();

  const param = useParams();
  const dlwjddn = useLocation();
  const params = new URLSearchParams(dlwjddn.search);

  const Get = async () => {
    const { data } = await axios({
      url: `http://192.168.0.16:8080/login/oauth/google?code=${ccode}`,
      method: 'get',
    });
    console.log(data.name);
    setUser(data);
    setHeader(data.name);
  };

  const Delet = async () => {
    axios({
      url: `http://192.168.0.16:8080/my-page/logout`,
      method: 'delete',
      headers: {
        Authorization: user?.accessToken,
      },
    });
  };

  let code = params.get('code');
  return (
    <>
      {/* <button
        onClick={() => {
          console.log(dlwjddn);
          console.log(code);
          setCcode(code);
        }}
      ></button>
      <button
        onClick={() => {
          Get();
        }}
      ></button>
      <button
        onClick={() => {
          console.log(user);
        }}
      >
        이름
      </button>
      <button
        onClick={() => {
          Delet();
          setUser({
            name: '',
            imageUrl: '',
            role: '',
            tokenType: '',
            accessToken: '',
            refreshToken: '',
          });
          setHeader('');
        }}
      >
        로그아웃
      </button>
      <p>{user?.name}</p> */}
    </>
  );
};

export default GoogleLoginBtnAfter;
