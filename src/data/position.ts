import axios from 'axios';
import { deflate } from 'zlib';

interface props {
  lat: String;
  lng: String;
  title: String;
}

const getData = async (url: string) => {
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

export default getData;
