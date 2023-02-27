import styled from '@emotion/styled';
import { deepStrictEqual } from 'assert';

export const Container = styled.div`
  width: 100%;
  height: 60rem;
  position: relative;

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

export const BoardHeaderWrap = styled.div`
  width: 100%;
  height: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserIcon = styled.div`
  width: 1.75rem;
  height: 1.75rem;
  background-color: gray;
  border-radius: 100%;
`;

export const UserNm = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.5rem;

  letter-spacing: 0.05em;

  color: #000000;
`;

export const BoardPostDate = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 0.8125rem;
  line-height: 1rem;

  color: #a1a1a1;
`;

export const ShowItemMapBtn = styled.button`
  width: 8.75rem;
  height: 2.5rem;
  position: relative;
  background: #2e6eeb;
  border-radius: 0.5rem;
  border: none;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.1875rem;
  /* identical to box height */

  color: #ffffff;
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

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.1875rem;

  border: 0.0625rem solid #d3d3d3;
  border-radius: 0.4375rem;

  color: #6d6d6d;
`;

export const Sex = styled.div`
  width: 32.5rem;
  height: 18.125rem;
  background-color: red;
`;
