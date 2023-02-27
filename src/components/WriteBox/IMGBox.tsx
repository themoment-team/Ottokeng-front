/** @jsxImportSource @emotion/react */
import * as S from './style';
import * as I from 'assets/svgs';
import { css } from '@emotion/react';
import React from 'react';

interface props {
  picture: string;
  title: string;
}

export const IMGBox = ({ picture, title }: props) => {
  return (
    <React.Fragment key={picture}>
      <S.IMGBox>
        <S.IMGFile src={picture} />
        <S.IMGContentBox>
          <S.IMGTitle>{title}</S.IMGTitle>
          <S.Range type="range" min="0" max="1000" />
        </S.IMGContentBox>
        <img
          css={css`
            width: 1.25rem;
            height: 1.25rem;
            margin-left: 3.25rem;
            cursor: pointer;
          `}
          src={I.TrashIcon}
          alt=""
        />
      </S.IMGBox>
      <S.Line />
    </React.Fragment>
  );
};
