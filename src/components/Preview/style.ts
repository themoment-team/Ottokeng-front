/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

export const ListItem = styled.div({
  position: 'relative',
  width: '320px',
  height: '360px',
  left: '285px',
  top: '1010px',

  background: '#FFFFFF',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.08)',
  borderRadius: '8px',
  margin: '0px 10px',
});

export const PhotoBox = styled.div({
  position: 'absolute',
  width: '280px',
  height: '208px',
  left: '20px',
  top: '20px',
  background: '#F1F1F5',
  borderRadius: '8px',
});

export const Description = styled.p({
  position: 'absolute',
  top: '244px',
  left: '20px',
  height: '78px',
  width: '243px',
  fontSize: '22px',
  color: '#191919',
  margin: '0',
});

export const Comment = styled.p({
  position: 'absolute',
  width: '350px',
  height: '33px',
  left: '293px',
  top: '930px',
  fontSize: '28px',
});

export const MapComment = styled.p({
  position: 'absolute',
  width: '430px',
  height: '33px',
  left: '293px',
  top: '130px',
  fontSize: '28px',
});

export const ArrowBox = styled.div({
  position: 'absolute',
  top: '972px',
  width: '60px',
  height: '22px',
  left: '1570px',
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
  width: '100px',
  height: '10px',
  position: 'absolute',
  top: '1398px',
  left: '909px',
});

export const Dots = styled.div({
  display: 'flex',
  width: '10px',
  height: '10px',
  backgroundColor: '#D9D9D9',
  margin: '0px 3px',
  borderRadius: '100%',
});

export const PlusBtn = styled.button({
  width: '80px',
  height: '80px',
  backgroundColor: '#2E6EEB',
  position: 'absolute',
  top: '1448px',
  left: '1716px',
  borderRadius: '100%',
  border: 'none',
});

export const Plus = styled.div({});

export const Map = styled.div({
  width: '1352px',
  height: '480px',
  position: 'absolute',
  top: '269px',
  left: '284px',
  backgroundColor: 'black',
});

export const Wrap = styled.div({
  backgroundColor: 'white',
});
