import axios from 'axios';

interface props {
  lat: String;
  lng: String;
  title: String;
}

export const getData = async (url: string) => {
  try {
    const url = `https://server.ottokeng.site/post/writing`;
    const res = await axios.get(url, {
      headers: {
        Authorization: 'Bearer',
      },
    });
    const data = res.data;
    console.log(data);
  } catch (err) {
    console.error(err);
  }
};
