/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';
import * as I from 'assets/svgs';
import * as C from 'components';
import { Swiper, SwiperSlide } from 'swiper/react'; // basic
import SwiperCore, { Navigation, Pagination } from 'swiper';
import 'swiper/css'; //basic
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const BoardInfo = () => {
  SwiperCore.use([Pagination]);

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
                  width: 10.375rem;
                  height: 1.625rem;
                `}
              >
                <S.UserIcon></S.UserIcon>
                <S.UserNm>사용자</S.UserNm>
                <S.BoardPostDate>2002.01.01</S.BoardPostDate>
              </div>
              <S.ShowItemMapBtn>위치 확인하기</S.ShowItemMapBtn>
            </S.BoardHeaderWrap>
            <div
              css={css`
                margin-bottom: 20px;
              `}
            >
              <div
                css={css`
                  margin-top: 0.5rem;
                  font-family: 'Pretendard';
                  font-style: normal;
                  font-weight: 500;
                  font-size: 1.25rem;
                  line-height: 1.5rem;
                  /* identical to box height */

                  color: #191919;
                `}
              >
                휴대폰을 분실했습니다.
              </div>
              <div
                css={css`
                  margin-top: 0.5rem;
                  font-style: normal;
                  font-weight: 400;
                  font-size: 1.0625rem;
                  line-height: 1.25rem;

                  color: #6d6d6d;
                `}
              >
                2023년 2월 8일 광주역에서 휴대폰을 잃어버렸음.
                <br /> 습득하신 분은 010-1234-5678로 연락주세요.
              </div>
            </div>

            <Swiper
              modules={[Pagination, Navigation]}
              style={{
                width: '32.5rem',
                height: '18.125rem',
                background: '#ddd',
                marginBottom: '2.25rem',
              }}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
            >
              <SwiperSlide></SwiperSlide>
              <SwiperSlide></SwiperSlide>
              <SwiperSlide></SwiperSlide>
              <SwiperSlide></SwiperSlide>
            </Swiper>

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
          <div
            css={css`
              width: 32.5rem;
              margin: 0 auto;
              height: 18.75rem;
              margin-top: 1.5rem;
              ::-webkit-scrollbar {
                display: none; /* Chrome, Safari, Opera*/
              }
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
