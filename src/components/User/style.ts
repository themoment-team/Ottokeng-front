/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

export const UserBox = styled.div`
  width: 200px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const UserImg = styled.div`
  width: 6.25rem;
  height: 6.25rem;
  background-color: black;
  border-radius: 100%;
`;
export const LoginBox = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;
`;
export const LogOut = styled.div`
  cursor: pointer;
`;
export const UserDelete = styled.div`
  cursor: pointer;
`;
export const Bar = styled.div`
  width: 2px;
  height: 0.75rem;
  background-color: #a1a1a1;
`;

export const Img = styled.div<{ image: string | null }>`
  width: inherit;
  height: inherit;
  border-radius: 100%;
  background-color: #f1f1f5;
  background-image: url(${props => props.image as string});
  background-repeat: no-repeat;
  background-size: cover;
`;
