/** @jsxImportSource @emotion/react */
import { Preview, PlusBtn, KakaoMap } from 'components';
import { css } from '@emotion/react';
import * as I from 'assets/svgs';
import * as S from './style';
import { useEffect, useState } from 'react';
const MainPage = ({ svg }: { svg: any }) => {
  const [description, setDescription] = useState(
    '0000년 00월 00일 00에서 00을 잃어버렸음.보신분 연락해주세요',
  );
  return (
    <div
      css={css`
        height: 1688px;
      `}
    >
      <KakaoMap
        text="내 위치 주변의 게시글을 확인해 보세요!"
        svg={<I.CloseIcon />}
      ></KakaoMap>
      <S.Comment>최신 등록된 글을 확인해보세요!</S.Comment>
      <S.ArrowBox>
        <S.Arrow
          css={css`
            transform: rotate(180deg);
          `}
        >
          {svg}
        </S.Arrow>
        <S.Arrow>{svg}</S.Arrow>
      </S.ArrowBox>
      <Preview text={description} svg={<I.ArrowIcon />}></Preview>
      <PlusBtn svg={<I.PlusIcon />}></PlusBtn>
      <S.DotsBox>
        <S.Dots></S.Dots>
        <S.Dots></S.Dots>
        <S.Dots></S.Dots>
        <S.Dots></S.Dots>
        <S.Dots></S.Dots>
        <S.Dots></S.Dots>
      </S.DotsBox>
    </div>
  );
};

export default MainPage;
