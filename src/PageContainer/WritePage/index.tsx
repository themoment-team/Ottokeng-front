/** @jsxImportSource @emotion/react */
import * as S from './style';
import * as I from 'assets/svgs';
import * as C from 'components';
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const WriteBox = () => {
  const { state } = useLocation();
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [check, setCheck] = useState<string>('');
  const [imgList, setImgList] = useState<any>([]);
  const [location, setMap] = useState<string[]>([]);

  let isUpdate = false;

  const path = useLocation().pathname;

  const changeChecked = (e: string) => {
    const delCheck = document.getElementById(`${e}CB`) as HTMLInputElement;
    delCheck.checked = false;
  };

  const handleCheck = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLInputElement;
    if (target.checked) {
      setCheck(target.value);
      target.value === 'acquire'
        ? changeChecked('loss')
        : changeChecked('acquire');
    } else setCheck('');
  };

  const sendData = async (url: string) => {
    const formData = new FormData();
    const type = check === 'acquire' ? 'LOST_WRITING' : 'FIND_WRITING';
    const contents = {
      title: title,
      contents: content,
      acquire: 'GET',
      lat: location[0],
      lng: location[1],
      communication: 'communication',
      type: type,
    };

    imgList.forEach((img: File | string) => {
      formData.append('file', img);
      formData.append('file', img as File);
    });

    const json = JSON.stringify(contents);
    const blob = new Blob([json], { type: 'application/json' });
    formData.append('content', blob);

    try {
      const res = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          charset: 'utf-8',
          Authorization: localStorage.getItem('token'),
        },
      });
      const data = res.data;
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = () => {
    console.log(location);
    if (
      title !== '' &&
      content !== '' &&
      check !== '' &&
      (imgList[0] ?? false) &&
      location.length !== 0
    ) {
      //통과
      let url = 'https://server.ottokeng.site/post/writing';
      if (isUpdate) {
        url += state.id;
      }
      sendData(url);
    } else {
      // 거름
      alert('안 돼 돌아가');
    }
  };

  interface updateProps {
    picture: string | undefined;
    id: string;
  }

  const onRemove = ({ picture, id }: updateProps) => {
    setImgList(imgList.filter((_: any, index: string) => index !== id));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let imgLists = [...imgList];
    const target = e.currentTarget;
    const files = (target.files as FileList)[0];
    const FILE_SIZE_MAX_LIMIT = 5 * 1024 * 1024;
    if (e.target.files !== null) {
      const pictures = Array.from(e.target.files);
      if (files.size > FILE_SIZE_MAX_LIMIT) {
        target.value = '';
        alert('업로드 가능한 최대 용량은 5MB입니다. ');
        return;
      }
      for (let i = 0; i < pictures.length; i++) {
        imgLists.push(pictures[i]);
      }
      if (imgLists.length > 5) {
        imgLists = imgLists.slice(0, 5);
        alert('이미지는 최대 5장 까지만 등록 가능합니다.');
      }
      setImgList(imgLists);
    }
  };

  const handleShowModal = (className: string) => {
    const IMGModal = document.querySelector(
      `.${className}`,
    ) as HTMLDialogElement;
    IMGModal.showModal();
  };

  const ModalDesign = css`
    border: 0;
    padding: 0;
    border-radius: 0.5rem;
    &::backdrop {
      background-color: rgba(25, 25, 25, 0.3);
    }
  `;

  useEffect(() => {
    isUpdate = path === '/write/update' ? true : false;
    if (isUpdate) {
      try {
        setTitle(state.title ?? '');
        setContent(state.contents ?? '');
        setCheck(state.type ?? '');
        setImgList(state.imageUrls ?? []);
        setMap(state.address ?? '');
        changeChecked(state.type === 'LOST_WRITING' ? 'loss' : 'acquire');
      } catch (err) {
        alert('수정할 정보가 없습니다.');
      }
    }
  }, []);

  return (
    <>
      <C.Header />
      <S.Container>
        <dialog className="IMGModal" css={ModalDesign}>
          <C.IMGModal imgList={imgList} onRemove={onRemove} />
        </dialog>
        <dialog className="MapModal" css={ModalDesign}>
          <C.MapModal setMap={setMap} />
        </dialog>
        <input
          type="file"
          id="fileInput"
          multiple
          css={css`
            display: none;
          `}
          onChange={handleFileChange}
        />
        <S.Title>{isUpdate ? '수정하기' : '글쓰기'}</S.Title>
        <S.Input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="제목을 입력해주세요."
          css={css`
            height: 2.75rem;
          `}
        />

        <S.TextArea
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="본인의 연락처, 분실물의 특징, 위치와 같은 자세한 내용을 입력해주세요."
          css={css`
            height: 13.625rem;
          `}
        />
        <S.Box>
          <S.FlexBox
            css={css`
              width: 9.625rem;
            `}
          >
            <C.CheckBox
              text="습득"
              value="acquire"
              handleCheck={handleCheck}
              id="acquireCB"
            ></C.CheckBox>
            <C.CheckBox
              text="분실"
              value="loss"
              handleCheck={handleCheck}
              id="lossCB"
            ></C.CheckBox>
          </S.FlexBox>
          <S.FlexBox
            css={css`
              width: 18rem;
            `}
          >
            <C.RegistrationBox
              svg={I.CameraIcon}
              text="사진 등록하기"
              onClick={() => handleShowModal('IMGModal')}
            />
            <C.RegistrationBox
              onClick={() => handleShowModal('MapModal')}
              text="위치 등록하기"
              svg={I.LocationIcon}
            />
          </S.FlexBox>
        </S.Box>
        <S.FlexBox
          css={css`
            width: 51.25rem;
            justify-content: center;
            margin-top: 11.625rem;
          `}
        >
          <S.SubmitBTN onClick={handleSubmit}>
            {isUpdate ? '수정완료' : '등록하기'}
          </S.SubmitBTN>
        </S.FlexBox>
      </S.Container>
    </>
  );
};

export default WriteBox;
