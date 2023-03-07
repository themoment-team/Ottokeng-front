/** @jsxImportSource @emotion/react */
import * as S from './style';
import * as I from 'assets/svgs';
import { css } from '@emotion/react';
import { useState } from 'react';

interface props {
  title: string;
  inform: string;
  date: string;
  userName: string;
  chatNum: string;
  isModify: boolean;
}

const ListItem = ({
  title,
  inform,
  date,
  userName,
  chatNum,
  isModify,
}: props) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleDotClick = () => {
    setShowModal(true);
  };

  const handleEventClick = (isModify: boolean) => {
    if (isModify) {
      if (window.confirm('수정 하시겠습니까?')) {
      }
    } else {
      if (window.confirm('정말 삭제 하시겠습니까?')) {
      }
    }
    setShowModal(false);
  };

  return (
    <div>
      <S.ContentBox>
        <S.IMGBox />
        <S.Content>
          <S.DotTitleBox>
            <S.Title>{title}</S.Title>
            {isModify && (
              <img
                css={css`
                  cursor: pointer;
                  position: relative;
                  top: -10px;
                `}
                src={I.DotIcon}
                alt=""
                onClick={handleDotClick}
              />
            )}
          </S.DotTitleBox>
          <S.ModifyFlexBox>
            <S.Inform>{inform}</S.Inform>
            {showModal && (
              <S.ModifyBox>
                <S.BoxText
                  css={css`
                    border-bottom: solid #ececec 1px;
                  `}
                  onClick={() => handleEventClick(true)}
                >
                  수정하기
                </S.BoxText>
                <S.BoxText onClick={() => handleEventClick(false)}>
                  삭제하기
                </S.BoxText>
              </S.ModifyBox>
            )}
          </S.ModifyFlexBox>
          <S.BottomBox>
            <S.DateAndNameBox>
              <S.DateAndName>
                {date} &nbsp;.&nbsp; 작성자 &nbsp;: {userName}
              </S.DateAndName>
            </S.DateAndNameBox>
            <S.MessageBox>
              <img src={I.MessageIcon} alt="" />
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
