/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';
export const PreviewBox = ({ text, svg }: { text: string; svg: any }) => {
  return (
    <div>
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
      <div
        css={css`
          display: flex;
          width: 1355px;
          height: 360px;
        `}
      >
        <S.ListItem>
          <S.PhotoBox></S.PhotoBox>
          <S.Description>{text}</S.Description>
        </S.ListItem>
        <S.ListItem>
          <S.PhotoBox></S.PhotoBox>
          <S.Description>{text}</S.Description>
        </S.ListItem>
        <S.ListItem>
          <S.PhotoBox></S.PhotoBox>
          <S.Description>{text}</S.Description>
        </S.ListItem>
        <S.ListItem>
          <S.PhotoBox></S.PhotoBox>
          <S.Description>{text}</S.Description>
        </S.ListItem>
      </div>
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
