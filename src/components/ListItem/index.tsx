/** @jsxImportSource @emotion/react */
import * as S from './style';
import * as I from 'assets/svgs';
import { css } from '@emotion/react';
import { useState } from 'react';

interface args {
  title: string;
  inform: string;
  date: string;
  userName: string;
  chatNum: string;
}

const ListItem = ({ title, inform, date, userName, chatNum }: args) => {
  return (
    <div
      css={css`
        cursor: pointer;
      `}
    >
      <S.ContentBox>
        <S.IMGBox />
        <S.Content>
          <S.Title>{title}</S.Title>
          <S.Inform>{inform}</S.Inform>
          <S.BottomBox>
            <S.DateAndNameBox>
              <S.DateAndName>
                {date} &nbsp;.&nbsp; 작성자 &nbsp;: {userName}
              </S.DateAndName>
            </S.DateAndNameBox>
            <S.MessageBox>
              <I.MessageIcon />
              <S.NumberOfChat>{chatNum}</S.NumberOfChat>
            </S.MessageBox>
          </S.BottomBox>
        </S.Content>
      </S.ContentBox>
      <S.Line />
    </div>
  );
};

export default ListItem;
