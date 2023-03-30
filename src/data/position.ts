import axios from 'axios';

export const getData = async (url: string) => {
  try {
    const url = `https://server.ottokeng.site/post/writing`;
    const res = await axios.get(url, {
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    });
    const data = res.data;
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};
