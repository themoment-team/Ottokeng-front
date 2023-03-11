/** @jsxImportSource @emotion/react */
import * as S from './style';
import * as I from 'assets/svgs';
import { css } from '@emotion/react';
import { useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

interface props {
  picture: any;
  title: string;
  onRemove: Function;
  id: string;
  isLast: boolean;
}

const IMGBox = ({ picture, title, onRemove, id, isLast }: props) => {
  const path = useLocation().pathname;
  const [value, setValue] = useState<number>(0);
  let isUpdate: boolean = false;

  useEffect(() => {
    isUpdate = path === '/write/update' ? true : false;
    setTimeout(() => {
      for (let i = 0; i <= 100000; i++) {
        setValue(value + i);
      }
    });
  }, []);

  return (
    <div>
      <S.IMGBox>
        <S.IMGFile
          src={isUpdate ? picture : URL.createObjectURL(picture as File)}
        />
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
          onClick={() => onRemove(isUpdate ? { picture, id } : { id })}
        />
      </S.IMGBox>
      {isLast && <S.Line />}
    </div>
  );
};

export default IMGBox;
