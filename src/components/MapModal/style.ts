import styled from '@emotion/styled';
import P from 'assets/palette';

export const MapModal = styled.div`
  width: 52.5rem;
  height: 38rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${P.white};
  padding: 2.5rem 0 2rem 0;
`;

export const Map = styled.map`
  width: 47.5rem;
  height: 26.25rem;
  background-color: ${P.gray1};
  border-radius: 0.5rem;
`;

export const SubmitBTN = styled.button`
  width: 9rem;
  height: 2.75rem;
  background-color: ${P.blue2};
  font-size: 1.25rem;
  color: #fff;
  border-radius: 0.5rem;
  border: 0;
  cursor: pointer;
  outline: none;
`;

export const Wrap = styled.div({
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '18.75rem',
  height: '6rem',
  borderRadius: '0.5rem',
  backgroundColor: 'white',
  bottom: '5.625rem',
  right: '-9.375rem',
});

export const Overlay = styled.div({
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  width: '18.75rem',
});
export const JibunEllipsis = styled.div({
  fontSize: '12px',
  color: '#999999',
});
export const Ellipsis = styled.div({
  fontSize: '0.75rem',
  color: '#999999',
});
export const DescTitle = styled.div({
  fontSize: '0.875rem',
  paddingBottom: '0.5rem',
});
export const Desc = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  height: '3.0625rem',
  paddingBottom: '0.3125rem',
});
export const LocationImg = styled.img({
  borderRadius: '0.5rem',
});
export const Esc = styled.div({
  position: 'absolute',
  left: '17.5rem',
  top: '0.3125rem',
});
