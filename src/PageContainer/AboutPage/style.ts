/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import BackgroundImg from 'images/BackgroundImg.png';
export const Image = styled.img`
  border-radius: 100%;
`;
export const Section = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .LogoBox {
    width: 100%;
    position: relative;
    z-index: 100000000;
    background-image: url(${BackgroundImg});
  }
  .BackEnd,
  .Design,
  .DevOps {
    background-color: black;
    color: white;
  }
  .FrontEnd {
    background-color: white;
    color: black;
  }
`;
export const Shadow = styled.div`
  width: inherit;
  height: 80rem;
  background-color: black;
  background: linear-gradient(rgba(25, 25, 25, 0) 0%, #191919 100%);
  z-index: 100000;
  position: absolute;
`;
export const Window = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 31.25rem 0rem;
`;
export const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ProfileTitle = styled.div`
  font-size: 3.75rem;
  font-weight: bold;
`;
export const Description = styled.p`
  text-align: center;
  padding-top: 2rem;
  font-size: 1.5rem;
`;
export const Bar = styled.div`
  width: 4rem;
  height: 0.4875rem;
  margin-top: 2rem;
`;

export const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Name = styled.p`
  font-size: 2rem;
  color: white;
  text-decoration: none;
`;
