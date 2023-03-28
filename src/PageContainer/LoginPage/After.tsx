import { useEffect } from 'react';

type Platform = 'kakao' | 'google';
interface props {
  loginCode: string | null;
  platform: Platform | null;
  getUserInfo: Function;
}

const After = ({ loginCode, platform, getUserInfo }: props) => {
  useEffect(() => {
    getUserInfo(loginCode, platform);
  }, []);
  return <p>로그인 중입니다...</p>;
};

export default After;
