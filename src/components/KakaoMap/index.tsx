/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';
import * as I from 'assets/svgs';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MapMarker, Map, CustomOverlayMap } from 'react-kakao-maps-sdk';

const KakaoMap = ({ text }: { text: string }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const markerPosition = {
    lat: 35.142738601752846,
    lng: 126.80072297715732,
  };
  const positions = [
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
            width: '84.5rem',
            height: '30rem',
          }}
          level={1}
        >
          {positions.map((position, index) => (
            <MapMarker
              key={`${position.title}-${position.latlng}`}
              position={position.latlng}
              onClick={() => setIsOpen(true)}
              image={{
                src: 'https://ifh.cc/g/Y9tpDk.png', // 마커이미지의 주소입니다
                size: {
                  width: 36,
                  height: 46,
                }, // 마커이미지의 크기입니다
                options: {
                  offset: {
                    x: 15,
                    y: 69,
                  }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
                },
              }}
              title={position.title}
            ></MapMarker>
          ))}
          {isOpen && (
            <CustomOverlayMap position={markerPosition}>
              <S.Wrap>
                <div className="info">
                  <S.Esc
                    className="close"
                    onClick={() => setIsOpen(false)}
                    title="닫기"
                  >
                    <I.CloseIcon />
                  </S.Esc>
                  <S.Overlay>
                    <div
                      css={css`
                        display: flex;
                        justify-content: center;
                        align-items: center;
                      `}
                    >
                      <S.LocationImg
                        src="//t1.daumcdn.net/thumb/C84x76/?fname=http://t1.daumcdn.net/cfile/2170353A51B82DE005"
                        width="73"
                        height="70"
                        alt="카카오 스페이스닷원"
                      />
                    </div>
                    <S.Desc>
                      <S.DescTitle>휴대폰을 분실했습니다</S.DescTitle>
                      <div>
                        <S.Ellipsis>
                          제주특별자치도 제주시 첨단로 242
                        </S.Ellipsis>
                        <S.JibunEllipsis>
                          (우) 63309 (지번) 영평동 2181
                        </S.JibunEllipsis>
                      </div>
                    </S.Desc>
                  </S.Overlay>
                </div>
              </S.Wrap>
            </CustomOverlayMap>
          )}
        </Map>
      </S.Map>
    </div>
  );
};

export default KakaoMap;
