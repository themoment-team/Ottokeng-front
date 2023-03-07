/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';
import * as I from 'assets/svgs';
import 'swiper/css'; //basic
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Writer } from './Writer';
import BoardTitle from './BoardTitle';
import BoardImg from './BoardImg';
import BoardComment from './BoardComment';

const BoardInfo = () => {
  return (
    <S.Container>
      <S.BoardInfoWrap>
        <S.BoardContentWrap>
          <Writer />
          <BoardTitle />
          <BoardImg />
          <S.CommentInputWrap>
            <div
              css={css`
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 1rem;
              `}
            >
              <I.Vector />
            </div>
            <S.CommentInput placeholder="댓글 입력해주세요" type="text" />
          </S.CommentInputWrap>
        </S.BoardContentWrap>
        <BoardComment />
      </S.BoardInfoWrap>
    </S.Container>
  );
};

export default BoardInfo;
