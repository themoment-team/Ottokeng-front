import styled from '@emotion/styled';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin-top: 8rem;

  background-color: #f1f1f5;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoardInfoWrap = styled.div`
  width: 40rem;
  height: 57.5rem;
  background-color: #fff;
  border-radius: 0.5rem;
`;

export const BoardContentWrap = styled.div`
  width: 32.5rem;
  height: 32.75rem;
  margin: 0 auto;
  margin-top: 2.5rem;
`;

export const CommentInputWrap = styled.div`
  width: 32.5rem;
  height: 3rem;
  padding: 0;

  position: relative;
`;

export const CommentInput = styled.input`
  width: 32.5rem;
  height: 3rem;
  padding-left: 1rem;
  box-sizing: border-box;

  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.1875rem;

  border: 0.0625rem solid #d3d3d3;
  border-radius: 0.4375rem;

  color: #6d6d6d;
`;
