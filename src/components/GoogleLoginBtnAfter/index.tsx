import * as S from './style';
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

import axios from 'axios';
import { useState } from 'react';

const GoogleLoginBtnAfter = () => {
  const [ccode, setCcode] = useState<string | null>('');

  const param = useParams();
  const dlwjddn = useLocation();
  const params = new URLSearchParams(dlwjddn.search);

  const Get = async () => {
    const { data }: any = await axios({
      url: `http://172.20.10.7:8080/login/oauth/google?code=${ccode}`,
      method: 'get',
    });
    console.log(data);
  };

  let code = params.get('code');
  return (
    <>
      <button
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
    </>
  );
};

export default GoogleLoginBtnAfter;
