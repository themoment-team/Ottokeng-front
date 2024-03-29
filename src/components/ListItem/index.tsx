/** @jsxImportSource @emotion/react */
import * as S from './style';
import * as I from 'assets/svgs';
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
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
  isMine: boolean;
  createdAt: string;
  profileImg: 'string';
};

const ListItem = ({ datas, isModify, setReload, reload }: props) => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState<boolean>(false);
  const [comments, setComments] = useState<comments[]>([]);
  const [createdAt, setCreatedAt] = useState<string>('');

  const handleDotClick = () => {
    setShowModal(true);
  };

  const handleEventClick = (isModify: boolean) => {
    if (isModify) {
      if (window.confirm('수정 하시겠습니까?')) {
        navigate('/write/update', { state: { datas: datas } });
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
        Authorization: localStorage.getItem('token'),
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
    const res = await axios.get(
      'https://server.ottokeng.site/post/comment/' + datas.id,
      {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      },
    );
    setComments(res.data);
  };

  const handleContentClick = () => {
    navigate('/list', { state: { datas: datas, comments: comments } });
  };

  useEffect(() => {
    getComments();
    setCreatedAt(datas.createdAt.split('T')[0]);
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
                {createdAt} &nbsp;.&nbsp; 작성자 &nbsp;: {datas.writer}
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
