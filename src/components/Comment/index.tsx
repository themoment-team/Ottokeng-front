/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import * as S from './style';
import * as I from 'assets/svgs';
import { useState } from 'react';
import axios from 'axios';

interface props {
  user: string;
  date: string;
  content: string;
  picture: string;
}

const Comment = ({ user, date, content, picture }: props) => {
  const [showCommentModify, setShowCommentModify] = useState<boolean>(false);

  // const editComment = async () => {
  //   await axios({
  //     url: 'http://localhost:3000/post/comment/{commentId}',
  //     method: 'patch',
  //     headers: {
  //       Authorization: accessToken,
  //     },
  //   });
  // };

  // const deletComment = async () => {
  //   await axios({
  //     url: 'http://localhost:3000/post/comment/{commentId}',
  //     method: 'delete',
  //   });
  // };

  return (
    <S.Container>
      <div
        css={css`
          width: 8.5625rem;
          height: 1.75rem;
          justify-content: space-between;
          display: flex;
          align-items: center;
        `}
      >
        <div
          css={css`
            position: absolute;
            right: 1.5rem;
          `}
        >
          <div
            onClick={() => {
              setShowCommentModify(!showCommentModify);
            }}
            css={css`
              cursor: pointer;
            `}
          >
            <img src={I.Hamburger} />
          </div>
        </div>

        {showCommentModify && (
          <S.ShowEdit>
            <S.CommentModify top="11px">댓글수정</S.CommentModify>
            <hr
              css={css`
                width: 88px;
                height: 0;
                border: 1px solid #ececec;
                margin: 0;
              `}
            />
            <S.CommentModify bottom="11px">댓글삭제</S.CommentModify>
          </S.ShowEdit>
        )}
        <S.UserIcon
          css={css`
            background-image: url(${picture});
          `}
        ></S.UserIcon>
        <S.BoardPostDate>{user}</S.BoardPostDate>
        <S.BoardPostDate>{date}</S.BoardPostDate>
      </div>
      <div
        css={css`
          font-style: normal;
          font-weight: 400;
          font-size: 0.9375rem;
          line-height: 1.125rem;
          /* identical to box height */
          letter-spacing: 0.05em;
          color: #777777;
          margin-top: 0.1875rem;
          margin-left: 2.5rem;
        `}
      >
        {content}
      </div>
    </S.Container>
  );
};

export default Comment;
