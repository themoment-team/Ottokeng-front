import { url } from 'inspector';
import styled from '@emotion/styled';

export const Container = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 5.5rem;
  position: fixed;
  top: 0;
  background-color: #fff;
  z-index: 1000000000000;
`;

export const HeaderContentWrap = styled.div`
  width: 97rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavigationContentWrqp = styled.div`
  width: 39.75rem;
  height: 7.5rem;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const LogoWrap = styled.div`
  width: 10.313rem;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 1.875rem;
  line-height: 2.1875rem;
  letter-spacing: -0.03em;

  color: #191919;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderListWrap = styled.ul`
  width: 25.4375rem;
  justify-content: space-between;
  list-style: none;
  display: flex;
  padding: 0;
`;

export const HeaderList = styled.li`
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.5rem;
  text-decoration: none;

  color: #191919;
`;

export const SearchProfileWrap = styled.div`
  width: 28.75rem;
  height: 2.75rem;

  background: #f1f1f5;
  border-radius: 1.375rem;
  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
`;

export const SearchBox = styled.input`
  width: 28.75rem;
  height: 2.75rem;

  padding-left: 1.25rem;

  border: none;
  background: #f1f1f5;
  border-radius: 1.375rem;

  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.1875rem;

  color: #999999;
`;

export const UserImg = styled.div<{ bGImg: string | null }>`
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  background-color: gray;
  background-image: url(${props => props.bGImg as string});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const UserName = styled.div`
  display: flex;
  font-style: normal;
  font-weight: 400;
  font-size: 1.375rem;
  line-height: 1.625rem;
  letter-spacing: 0.05em;

  color: #191919;
`;

export const Lists = styled.p`
  font-weight: 500;
  font-family: Roboto;
`;
