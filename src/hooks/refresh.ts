import axios from 'axios';

const refresh = async () => {
  const res = await axios.get('https://server.ottokeng.site/token/reissue', {
    headers: {
      RefreshToken: localStorage.getItem('refreshToken'),
    },
  });
  const data = res.data;
  console.log(data);
  localStorage.setItem('token', data.AccessToken);
  localStorage.setItem('refreshToken', data.RefreshToken);
};

export default refresh;
