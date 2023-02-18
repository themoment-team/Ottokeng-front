/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';
import React, { useEffect } from 'react';
import { MapMarker, Map } from 'react-kakao-maps-sdk';

const KakaoMap = ({ text }: { text: string }) => {
  return (
    <div>
      <S.MapComment>{text}</S.MapComment>
      <S.Map>
        <Map
          center={{
            lat: 35.142738601752846,
            lng: 126.80072297715732,
          }}
          style={{
            width: '1352px',
            height: '480px',
          }}
          level={1}
        >
          <MapMarker
            position={{
              lat: 35.142738601752846,
              lng: 126.80072297715732,
            }}
          />
        </Map>
      </S.Map>
    </div>
  );
};

export default KakaoMap;
