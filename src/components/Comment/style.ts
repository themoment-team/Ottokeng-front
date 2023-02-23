import styled from '@emotion/styled';

export const Container = styled.div`
  width: 520px;
  height: 50px;

  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  border-bottom: 1px solid #ececec;

  position: relative;
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
