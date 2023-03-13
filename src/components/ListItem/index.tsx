/** @jsxImportSource @emotion/react */
import * as S from './style';
import * as I from 'assets/svgs';
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/core';
import axios from 'axios';

type datas = {
  id: string;
  title: string;
  contents: string;
  writer: string;
  acquire: 'GET';
  address: string;
  type: 'LOST_WRITING' | 'FIND_WRITING';
  createdAt: string;
  imageUrls: [string];
};

interface props {
  datas: datas;
  isModify: boolean;
  setReload: Function;
  reload: boolean;
}

type comments = {
  commentId: 1;
  writer: string;
  contents: string;
  createdAt: string;
};

const ListItem = ({ datas, isModify, setReload, reload }: props) => {
  const navigation =
    useNavigation<
      StackNavigationProp<any | { datas: datas; comments: comments }>
    >();

  const [showModal, setShowModal] = useState<boolean>(false);
  const [comments, setComments] = useState<comments[]>([]);

  const handleDotClick = () => {
    setShowModal(true);
  };

  const handleEventClick = (isModify: boolean) => {
    if (isModify) {
      if (window.confirm('수정 하시겠습니까?')) {
        navigation.navigate('/write/update', { datas });
      }
    } else {
      if (window.confirm('정말 삭제 하시겠습니까?')) {
        delBulletin(datas.id);
      }
    }
    setShowModal(false);
  };

  const delBulletin = async (id: string) => {
    const res = await axios.delete('https://abc/post/writing', {
      headers: {
        Authorization: 'accessToken',
      },
      data: {
        pathVariable: {
          id: id,
        },
      },
    });
    console.log(res);
    if (res.status === 204) {
      alert('게시글이 삭제 되었습니다');
      setReload(!reload);
    }
  };

  const getComments = async () => {
    const res = await axios.get('https://abc/post/comment/' + datas.id, {
      headers: {
        Authorization: 'accessToken',
      },
    });
    setComments(res.data);
  };

  const handleContentClick = () => {
    navigation.navigate('/list', { datas, comments });
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <div>
      <S.ContentBox onClick={handleContentClick}>
        <S.IMGBox
          css={css`
            background-image: url(${datas.imageUrls[0]});
          `}
        />
        <S.Content>
          <S.DotTitleBox>
            <S.Title>{datas.title}</S.Title>
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
            <S.Inform>{datas.contents}</S.Inform>
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
                {datas.createdAt} &nbsp;.&nbsp; 작성자 &nbsp;: {datas.writer}
              </S.DateAndName>
            </S.DateAndNameBox>
            <S.MessageBox>
              <img src={I.MessageIcon} alt="" />
              <S.NumberOfChat>{comments.length}</S.NumberOfChat>
            </S.MessageBox>
          </S.BottomBox>
        </S.Content>
      </S.ContentBox>
      <S.Line />
    </div>
  );
};

export default ListItem;
