/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as I from 'assets/svgs';
import * as S from './style';
import { useEffect, useState } from 'react';
import { BackEnd, Design, DevOps, FrontEnd } from 'data/about';
import TeamLogo from 'images/TeamLogo.png';
import * as C from 'components';
const AboutPage = () => {
  return (
    <>
      <C.Header />
      <S.Section>
        <S.Window className="LogoBox">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 10000000,
            }}
          >
            <img src={TeamLogo} width={160} height={160}></img>
            <span
              style={{
                fontSize: '4rem',
                color: 'white',
                fontWeight: 'bold',
                paddingTop: '1.875rem',
              }}
            >
              the moment
            </span>
          </div>
          <S.Shadow></S.Shadow>
        </S.Window>
        <S.Window className="BackEnd">
          <S.ProfileBox>
            <S.ProfileTitle>Back-end</S.ProfileTitle>
            <S.Bar style={{ backgroundColor: 'red' }}></S.Bar>
            <S.Description>
              다양한 백엔드 애플리케이션을 개발하고
              <br />
              CS적인 사고를 통해 데이터를 안정적이고 유연하게
              <br />
              서빙 하는 것을 목표로 합니다
            </S.Description>
            <div
              style={{
                display: 'flex',
                width: '45rem',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: ' 10rem',
              }}
            >
              {BackEnd.map((profile, i) => (
                <S.Link
                  href={profile.githubURL}
                  target="_blank"
                  key={i}
                  rel="noreferrer"
                >
                  <S.Image
                    src={profile.imageURL}
                    alt=""
                    width={240}
                    height={240}
                  />
                  <S.Name>{profile.name}</S.Name>
                </S.Link>
              ))}
            </div>
          </S.ProfileBox>
        </S.Window>
        <S.Window className="FrontEnd">
          <S.ProfileBox>
            <S.ProfileTitle>Front-end</S.ProfileTitle>
            <S.Bar style={{ backgroundColor: '#2E6EEB ' }}></S.Bar>
            <S.Description>
              화면을 구상하고, 제작하며
              <br />
              사용자에게 더 나은 UI/UX를 제공하기 위해 끊임없이 연구합니다.
            </S.Description>
            <div
              style={{
                display: 'flex',
                width: '67.5rem',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: ' 10rem',
              }}
            >
              {FrontEnd.map((profile, i) => (
                <S.Link
                  href={profile.githubURL}
                  target="_blank"
                  key={i}
                  rel="noreferrer"
                >
                  <S.Image
                    src={profile.imageURL}
                    alt=""
                    width={240}
                    height={240}
                  />
                  <S.Name style={{ color: 'black' }}>{profile.name}</S.Name>
                </S.Link>
              ))}
            </div>
          </S.ProfileBox>
        </S.Window>
        <div style={{ display: 'flex', backgroundColor: 'black' }}>
          <S.Window className="Design">
            <S.ProfileBox>
              <S.ProfileTitle>Design</S.ProfileTitle>
              <S.Bar style={{ backgroundColor: '#9B66F0 ' }}></S.Bar>
              <S.Description>
                사용자의 목소리에 귀를 기울이고 관찰하여
                <br />
                디자인합니다.
              </S.Description>
              <div style={{ paddingTop: '4.5rem' }}>
                {Design.map((profile, i) => (
                  <S.Link
                    href={profile.githubURL}
                    target="_blank"
                    key={i}
                    rel="noreferrer"
                  >
                    <S.Image
                      src={profile.imageURL}
                      alt=""
                      width={240}
                      height={240}
                    />
                    <S.Name>{profile.name}</S.Name>
                  </S.Link>
                ))}
              </div>
            </S.ProfileBox>
          </S.Window>
          <S.Window className="DevOps">
            <S.ProfileBox>
              <S.ProfileTitle>DevOps</S.ProfileTitle>
              <S.Bar style={{ backgroundColor: '#2ED67B' }}></S.Bar>
              <S.Description>
                클라우드 아키텍쳐를 구성하고 운영하는데
                <br />
                사용되는 기술들을 연구합니다.
              </S.Description>
              <div style={{ paddingTop: '4.5rem' }}>
                {DevOps.map((profile, i) => (
                  <S.Link
                    href={profile.githubURL}
                    target="_blank"
                    key={i}
                    rel="noreferrer"
                  >
                    <S.Image
                      src={profile.imageURL}
                      alt=""
                      width={240}
                      height={240}
                    />
                    <S.Name>{profile.name}</S.Name>
                  </S.Link>
                ))}
              </div>
            </S.ProfileBox>
          </S.Window>
        </div>
        <C.Footer />
      </S.Section>
    </>
  );
};

export default AboutPage;
