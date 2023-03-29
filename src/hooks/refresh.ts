import axios from 'axios';

const refresh = async () => {
  const res = await axios.get('https://server.ottokeng.site/token/reissue', {
    headers: {
      RefreshToken: localStorage.getItem('refreshToken'),
    },
  });
  const data = res.data;
  console.log(data);
};

export default refresh;
