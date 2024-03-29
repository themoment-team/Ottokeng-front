/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';
import { useEffect, useState } from 'react';

interface Props {
  setMap: Function;
}

const MapModal = ({ setMap }: Props) => {
  const [address, setAddress] = useState('');
  let lat: number = 35.142738601752846,
    lng: number = 126.80072297715732;
  const handleSubmit = () => {
    setMap([String(lat), String(lng)]);
  };
  const geocoder = new kakao.maps.services.Geocoder();

  const getAddress = () => {
    geocoder.coord2Address(lng, lat, (result, status) => {
      if (result[0].address.address_name !== null) {
        console.log(result[0]?.address.address_name);
        setAddress(String(result[0]?.address.address_name));
      }
    });
  };

  useEffect(() => {
    const mapContainer = document.getElementById('mapLocation'),
      mapOption = {
        center: new kakao.maps.LatLng(lat, lng),
        level: 3,
      };

    const map = new kakao.maps.Map(mapContainer as HTMLElement, mapOption);
    const imgSrc = 'https://ifh.cc/g/Y9tpDk.png',
      imgSize = new kakao.maps.Size(36, 46),
      imgOption = { offset: new kakao.maps.Point(27, 69) };
    const markerIMG = new kakao.maps.MarkerImage(imgSrc, imgSize, imgOption);
    const position = new kakao.maps.LatLng(lat, lng);
    const marker = new kakao.maps.Marker({
      position: position,
      image: markerIMG,
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        lat = position.coords.latitude;
        lng = position.coords.longitude;
        handleSubmit();
        getAddress();

        const locPosition = new kakao.maps.LatLng(lat, lng);
        marker.setPosition(locPosition);

        map.setCenter(locPosition);
      });
    } else {
      alert('위치 접근 불가');
    }

    marker.setMap(map);

    kakao.maps.event.addListener(
      map,
      'click',
      function (mouseEvent: { latLng: any }) {
        const latlng = mouseEvent.latLng;

        marker.setPosition(latlng);
        lat = latlng.getLat();
        lng = latlng.getLng();
        handleSubmit();
        getAddress();
      },
    );

    setInterval(() => {
      map.relayout();
    }, 1000);
  }, []);

  return (
    <S.MapModal>
      <S.Map id="mapLocation"></S.Map>
      <h3>선택하신 지역은 "{address}" 입니다</h3>
      <form method="dialog">
        <S.SubmitBTN
          css={css`
            margin-top: 9rem;
          `}
          onClick={handleSubmit}
        >
          위치등록
        </S.SubmitBTN>
      </form>
    </S.MapModal>
  );
};

export default MapModal;
