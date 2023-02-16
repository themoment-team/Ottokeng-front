import styled from '@emotion/styled';
import { deepStrictEqual } from 'assert';

export const Container = styled.div`
  width: 100%;
  height: 960px;
  position: relative;

  background-color: #f1f1f5;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoardInfoWrap = styled.div`
  width: 640px;
  height: 920px;
  background-color: #fff;
  border-radius: 8px;
`;

export const BoardContentWrap = styled.div`
  width: 520px;
  height: 524px;
  margin: 0 auto;
  margin-top: 40px;
`;

export const BoardHeaderWrap = styled.div`
  width: 100%;
  height: 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserIcon = styled.div`
  width: 28px;
  height: 28px;
  background-color: gray;
  border-radius: 100%;
`;

export const UserNm = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  letter-spacing: 0.05em;

  color: #000000;
`;

export const BoardPostDate = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;

  color: #a1a1a1;
`;

export const ShowItemMapBtn = styled.button`
  width: 140px;
  height: 40px;
  position: relative;
  background: #2e6eeb;
  border-radius: 8px;
  border: none;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */

  color: #ffffff;
`;

export const ItemImgs = styled.div`
  width: 520px;
  height: 292px;
  border-radius: 8px;
  background-color: blue;

  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 36px;
`;

export const CommentInputWrap = styled.div`
  width: 520px;
  height: 48px;
  padding: 0;

  position: relative;
`;

export const CommentInput = styled.input`
  width: 520px;
  height: 48px;
  padding-left: 16px;
  box-sizing: border-box;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  border: 1px solid #d3d3d3;
  border-radius: 7px;

  color: #6d6d6d;
`;
