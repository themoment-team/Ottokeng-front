/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';
import { Map } from 'react-kakao-maps-sdk';
import { useEffect } from 'react';

const MapModal = ({ setMap }: { setMap: Function }) => {
  interface props {
    locPosition: any;
  }

  let lat: number = 35.142738601752846,
    lon: number = 126.80072297715732;
  useEffect(() => {
    const mapContainer = document.getElementById('mapLocation'),
      mapOption = {
        center: new kakao.maps.LatLng(lat, lon),
        level: 3,
      };

    const map = new kakao.maps.Map(mapContainer as HTMLElement, mapOption);
    const marker = new kakao.maps.Marker({
      position: map.getCenter(),
    });

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        lat = position.coords.latitude;
        lon = position.coords.longitude;

        const locPosition = new kakao.maps.LatLng(lat, lon);
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
        lon = latlng.getLng();
        console.log(lat, lon);
      },
    );
  }, []);

  const handleSubmit = () => {
    setMap([String(lat), String(lon)]);
  };

  return (
    <S.MapModal>
      <S.Map id="mapLocation" />
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
