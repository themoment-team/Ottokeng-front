/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';
import * as I from '../../assets/svgs';
import * as C from '../../components';

const BoardInfo = () => {
  return (
    <>
      <S.Container>
        <S.BoardInfoWrap>
          <S.BoardContentWrap>
            <S.BoardHeaderWrap>
              <div
                css={css`
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  width: 166px;
                  height: 26px;
                `}
              >
                <S.UserIcon></S.UserIcon>
                <S.UserNm>사용자</S.UserNm>
                <S.BoardPostDate>2002.01.01</S.BoardPostDate>
              </div>
              <S.ShowItemMapBtn>
                {/* <div
                  css={css`
                    width: 14.2px;
                    height: 17.95px;
                    background: #ffffff;
                    position: absolute;
                    transform: matrix(-1, 0, 0, 1, 0, 0);

                    top: 11px;
                    left: 14px;
                  `}
                ></div> */}
                위치 확인하기
              </S.ShowItemMapBtn>
            </S.BoardHeaderWrap>
            <div
              css={css`
                margin-bottom: 20px;
              `}
            >
              <div
                css={css`
                  margin-top: 8px;
                  font-family: 'Pretendard';
                  font-style: normal;
                  font-weight: 500;
                  font-size: 20px;
                  line-height: 24px;
                  /* identical to box height */

                  color: #191919;
                `}
              >
                휴대폰을 분실했습니다.
              </div>
              <div
                css={css`
                  margin-top: 8px;
                  font-style: normal;
                  font-weight: 400;
                  font-size: 17px;
                  line-height: 20px;

                  color: #6d6d6d;
                `}
              >
                2023년 2월 8일 광주역에서 휴대폰을 잃어버렸음.
                <br /> 습득하신 분은 010-1234-5678로 연락주세요.
              </div>
            </div>
            <S.ItemImgs>
              <div
                css={css`
                  padding-right: 12px;
                  transform: rotate(180deg);

                  /* position: absolute;
                top: 50%;
                transform: translateY(-50%);
                right: 12px; */
                `}
              >
                <I.Arrow />
              </div>
              <div
                css={css`
                  padding-right: 12px;
                  /* position: absolute;
                  top: 50%;
                  transform: translateY(-50%);
                  left: 12px; */
                `}
              >
                <I.Arrow />
              </div>
            </S.ItemImgs>
            <S.CommentInputWrap>
              <div
                css={css`
                  position: absolute;
                  top: 50%;
                  transform: translateY(-50%);
                  right: 16px;
                `}
              >
                <I.Vector />
              </div>
              <S.CommentInput placeholder="댓글 입력해주세요" type="text" />
            </S.CommentInputWrap>
          </S.BoardContentWrap>
          <div
            css={css`
              width: 520px;
              margin: 0 auto;
              height: 300px;
              margin-top: 24px;

              overflow-y: scroll;
              overflow-x: hidden;
            `}
          >
            <C.Comment></C.Comment>
            <C.Comment></C.Comment>
            <C.Comment></C.Comment>
            <C.Comment></C.Comment>
            <C.Comment></C.Comment>
            <C.Comment></C.Comment>
          </div>
        </S.BoardInfoWrap>
      </S.Container>
    </>
  );
};

export default BoardInfo;
