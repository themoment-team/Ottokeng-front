/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';
import React, { useEffect, useState } from 'react';
import { MapMarker, Map, CustomOverlayMap } from 'react-kakao-maps-sdk';

const KakaoMap = ({ text, svg }: { text: string; svg: any }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const markerPosition = {
    lat: 35.142738601752846,
    lng: 126.80072297715732,
  };

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
            position={markerPosition}
            onClick={() => setIsOpen(true)}
            image={{
              src: 'https://ifh.cc/g/Y9tpDk.png', // 마커이미지의 주소입니다
              size: {
                width: 36,
                height: 45,
              }, // 마커이미지의 크기입니다
              options: {
                offset: {
                  x: 15,
                  y: 69,
                }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
              },
            }}
          />
          {isOpen && (
            <CustomOverlayMap position={markerPosition}>
              <S.Wrap>
                <div className="info">
                  <div className="title">
                    카카오 스페이스닷원
                    <div
                      className="close"
                      onClick={() => setIsOpen(false)}
                      title="닫기"
                    >
                      {svg}
                    </div>
                  </div>
                  <div className="body">
                    <div className="img">
                      <img
                        src="//t1.daumcdn.net/thumb/C84x76/?fname=http://t1.daumcdn.net/cfile/2170353A51B82DE005"
                        width="73"
                        height="70"
                        alt="카카오 스페이스닷원"
                      />
                    </div>
                    <div className="desc">
                      <div className="ellipsis">
                        제주특별자치도 제주시 첨단로 242
                      </div>
                      <div className="jibun ellipsis">
                        (우) 63309 (지번) 영평동 2181
                      </div>
                      <div>
                        <a
                          href="https://www.kakaocorp.com/main"
                          target="_blank"
                          className="link"
                          rel="noreferrer"
                        >
                          홈페이지
                        </a>
                      </div>
                    </div>
                  </div>
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
