import styled from '@emotion/styled';
interface CommentPosition {
  top?: string;
  bottom?: string;
}

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
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.5rem;

  letter-spacing: 0.05em;

  color: #000000;
`;

export const BoardPostDate = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 0.8125rem;
  line-height: 1rem;

  color: #a1a1a1;
`;

export const ShowEdit = styled.div`
  width: 100px;
  height: 72px;
  background-color: #fff;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  position: absolute;
  right: 3px;
  top: 28px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CommentModify = styled.span<CommentPosition>`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #999999;
  cursor: pointer;
  letter-spacing: 0.05em;
  position: absolute;
  top: ${props => props.top};
  bottom: ${props => props.bottom};
  &:hover {
    color: #6695f1;
  }
`;
