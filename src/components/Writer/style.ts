import styled from '@emotion/styled';

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
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.1875rem;

  color: #ffffff;
`;
