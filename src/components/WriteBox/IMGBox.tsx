/** @jsxImportSource @emotion/react */
import * as S from './style';
import * as I from 'assets/svgs';
import { css } from '@emotion/react';
import React, { useEffect, useState } from 'react';

interface props {
  picture: File;
  title: string;
  onRemove: Function;
  id: string;
}

export const IMGBox = ({ picture, title, onRemove, id }: props) => {
  const [value, setValue] = useState<number>(0);
  useEffect(() => {
    setTimeout(() => {
      for (let i = 0; i <= 100000; i++) {
        setValue(value + i);
      }
    });
  }, []);

  // const handleClick = () => {
  //   onRemove(id);
  // };
  return (
    <React.Fragment>
      <S.IMGBox>
        <S.IMGFile src={URL.createObjectURL(picture)} />
        <S.IMGContentBox>
          <S.IMGTitle>{title}</S.IMGTitle>
          <S.Range readOnly type="range" min="0" max="10000" value={value} />
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
          onClick={() => onRemove(id)}
        />
      </S.IMGBox>
      <S.Line />
    </React.Fragment>
  );
};
