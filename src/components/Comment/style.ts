import styled from '@emotion/styled';

export const Container = styled.div`
  width: 32.5rem;
  height: 3.125rem;

  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  border-bottom: 0.0625rem solid #ececec;

  position: relative;
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
