/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';
import * as I from 'assets/svgs';
import * as C from 'components';
import 'swiper/css'; //basic
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import axios from 'axios';
import { useState } from 'react';

const BoardInfo = () => {
  const [comment, setComment] = useState<string>();

  // const postComment = async () => {
  //   await axios({
  //     url: `http://localhost:3000/post/comment/${postId}`,
  //     method: 'post',
  //     headers: {
  //       Authorization: '엑세스토큰',
  //     },
  //     data: comment,
  //   });
  // };

  return (
    <S.Container>
      <S.BoardInfoWrap>
        <S.BoardContentWrap>
          <C.Writer />
          <C.BoardTitle />
          <C.BoardImg />
          <S.CommentInputWrap>
            <div
              css={css`
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 1rem;
              `}
            >
              <img src={I.Vector} />
            </div>
            <S.CommentInput
              placeholder="댓글 입력해주세요"
              type="text"
              onChange={e => setComment(e.target.value)}
            />
          </S.CommentInputWrap>
        </S.BoardContentWrap>
        <C.BoardComment />
      </S.BoardInfoWrap>
    </S.Container>
  );
};

export default BoardInfo;
