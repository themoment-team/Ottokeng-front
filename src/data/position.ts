import axios from 'axios';

interface props {
  lat: String;
  lng: String;
  title: String;
}

const getData = async (url: string) => {
  try {
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

export const positions = [
  {
    title: '카카오',
    latlng: { lat: 33.450705, lng: 126.570677 },
  },
  {
    title: '생태연못',
    latlng: { lat: 33.450936, lng: 126.569477 },
  },
  {
    title: '텃밭',
    latlng: { lat: 33.450879, lng: 126.56994 },
  },
  {
    title: '근린공원',
    latlng: { lat: 33.451393, lng: 126.570738 },
  },
  {
    title: '광주소프트웨어마이스터고',
    latlng: { lat: 35.142738601752846, lng: 126.80072297715732 },
  },
];
