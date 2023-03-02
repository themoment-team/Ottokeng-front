/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

export const ListItem = styled.div({
  position: 'relative',
  width: '20rem',
  height: '22.5rem',
  left: '17.8125rem',
  top: '63.125rem',

  background: '#FFFFFF',
  boxShadow: '0rem 0.25rem 0.625rem rgba(0, 0, 0, 0.08)',
  borderRadius: '0.5rem',
  margin: '0rem 0.625rem',
});

export const PhotoBox = styled.div({
  position: 'absolute',
  width: '17.5rem',
  height: '13rem',
  left: '1.25rem',
  top: '1.25rem',
  background: '#F1F1F5',
  borderRadius: '0.5rem',
});

export const Description = styled.p({
  position: 'absolute',
  top: '15.25rem',
  left: '1.25rem',
  height: '4.875rem',
  width: '15.1875rem',
  fontSize: '1.375rem',
  color: '#191919',
  margin: '0',
});

export const Comment = styled.p({
  position: 'absolute',
  width: '21.875rem',
  height: '2.0625rem',
  left: '18.3125rem',
  top: '58.125rem',
  fontSize: '1.75rem',
});

export const MapComment = styled.p({
  position: 'absolute',
  width: '26.875rem',
  height: '2.0625rem',
  left: '18.3125rem',
  top: '8.125rem',
  fontSize: '1.75rem',
});

export const ArrowBox = styled.div({
  position: 'absolute',
  top: '60.75rem',
  width: '3.75rem',
  height: '1.375rem',
  left: '98.125rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const Arrow = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const DotsBox = styled.div({
  display: 'flex',
  width: '6.25rem',
  height: '0.625rem',
  position: 'absolute',
  top: '87.375rem',
  left: '56.8125rem',
});

export const Dots = styled.div({
  display: 'flex',
  width: '0.625rem',
  height: '0.625rem',
  backgroundColor: '#D9D9D9',
  margin: '0rem 0.1875rem',
  borderRadius: '100%',
});

export const PlusBtn = styled.button({
  width: '5rem',
  height: '5rem',
  backgroundColor: '#2E6EEB',
  position: 'absolute',
  top: '90.5rem',
  left: '107.25rem',
  borderRadius: '100%',
  border: 'none',
});

export const Plus = styled.div({});

export const Map = styled.div({
  width: '84.5rem',
  height: '30rem',
  position: 'absolute',
  top: '16.8125rem',
  left: '17.75rem',
  backgroundColor: 'black',
});

export const Wrap = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '18.75rem',
  height: '6rem',
  borderRadius: '0.5rem',
  backgroundColor: 'white',
});

export const Overlay = styled.div({
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  width: '18.75rem',
});
export const Title = styled.div({});
export const JibunEllipsis = styled.div({
  fontSize: '12px',
  color: '#999999',
});
export const Ellipsis = styled.div({
  fontSize: '12px',
  color: '#999999',
});
export const DescTitle = styled.div({
  fontSize: '14px',
  paddingBottom: '8px',
});
export const Desc = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  height: '49px',
  paddingBottom: '5px',
});
export const LocationImg = styled.img({
  borderRadius: '8px',
});
export const Esc = styled.div({
  position: 'absolute',
  left: '280px',
  top: '5px',
});
