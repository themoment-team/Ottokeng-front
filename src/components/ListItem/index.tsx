/** @jsxImportSource @emotion/react */
import * as S from './style';
import * as I from '../../assets/svgs';
import { css } from '@emotion/react';
import { useState } from 'react';

const ListItem = () => {
  const [date, setDate] = useState('2000.01.01');
  const [userName, setUserName] = useState('Anon');
  const [chatNum, setChatNum] = useState(0);
  const [title, setTitle] = useState('제목');
  const [inform, setInform] = useState('정보');

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
      <S.Line></S.Line>
    </div>
  );
};

export default ListItem;
