/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';
import * as I from 'assets/svgs';
const Preview = () => {
  return (
    <div>
      <div
        css={css`
          display: flex;
          width: 1355px;
          height: 360px;
        `}
      >
        <S.ListItem>
          <S.PhotoBox></S.PhotoBox>
          <S.Description></S.Description>
        </S.ListItem>
        <S.ListItem>
          <S.PhotoBox></S.PhotoBox>
          <S.Description></S.Description>
        </S.ListItem>
        <S.ListItem>
          <S.PhotoBox></S.PhotoBox>
          <S.Description></S.Description>
        </S.ListItem>
        <S.ListItem>
          <S.PhotoBox></S.PhotoBox>
          <S.Description></S.Description>
        </S.ListItem>
      </div>
    </div>
  );
};

export default Preview;
