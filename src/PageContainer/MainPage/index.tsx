/** @jsxImportSource @emotion/react */
import { Preview, PlusBtn, KakaoMap } from 'components';
import { css } from '@emotion/react';
import * as I from 'assets/svgs';
import * as S from './style';
import { useEffect, useState } from 'react';
import axios from 'axios';
const MainPage = () => {
  return (
    <div
      css={css`
        height: 1688px;
      `}
    >
      <KakaoMap text="내 위치 주변의 게시글을 확인해 보세요!"></KakaoMap>
      <S.Comment>최신 등록된 글을 확인해보세요!</S.Comment>
      <S.ArrowBox>
        <S.Arrow
          css={css`
            transform: rotate(180deg);
          `}
        >
          <I.ArrowIcon />
        </S.Arrow>
        <S.Arrow>
          <I.ArrowIcon />
        </S.Arrow>
      </S.ArrowBox>
      <Preview />
      <PlusBtn></PlusBtn>
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
