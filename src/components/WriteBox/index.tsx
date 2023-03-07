/** @jsxImportSource @emotion/react */
import * as S from './style';
import * as I from 'assets/svgs';
import { css } from '@emotion/react';
import { CheckBox } from './CheckBox';
import { RegistrationBox } from './RegistrationBox';
import { IMGBox } from './IMGBox';
import { useState } from 'react';
import axios from 'axios';

const WriteBox = ({
  kind,
  submitText,
}: {
  kind: string;
  submitText: string;
}) => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [check, setCheck] = useState<string>('');
  const [imgList, setImgList] = useState<any>([]);
  const [location, setLocation] = useState<string>('address');

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

  const sendData = async (url: string, date: string) => {
    const formData = new FormData();
    const type = check === 'acquire' ? 'LOST_WRITING' : 'FIND_WRITING';

    const contents = {
      title: title,
      contents: content,
      // date: date,
      acquire: 'GET',
      address: location,
      communication: 'communication',
      type: type,
    };

    imgList.forEach((img: File) => {
      formData.append('file', img);
    });

    const json = JSON.stringify(contents);
    const blob = new Blob([json], { type: 'application/json' });
    formData.append('content', blob);

    try {
      const res = await axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          charset: 'utf-8',
          Authorization: '',
        },
      });
      const data = res.data;
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = () => {
    if (
      title !== '' &&
      content !== '' &&
      check !== '' &&
      (imgList[0] ?? false) &&
      location !== ''
    ) {
      //통과
      const url = 'http://10.120.74.187:8080/post/writing';
      const date = new Date();
      sendData(
        url,
        `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(
          2,
          '0',
        )}/${String(date.getDate()).padStart(2, '0')}`,
      );
    } else {
      // 거름
      console.error('안 돼 돌아가');
    }
  };

  const onRemove = (id: string) => {
    // setImgList(imgList.filter(img => img.key !== target));
    setImgList(imgList.filter((_: any, index: string) => index !== id));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let imgLists = [...imgList];
    if (e.target.files !== null) {
      const pictures = Array.from(e.target.files);
      for (let i = 0; i < pictures.length; i++) {
        imgLists.push(pictures[i]);
      }
      if (imgLists.length > 5) {
        imgLists = imgLists.slice(0, 5);
        alert('이미지는 최대 5장 까지만 등록 가능합니다');
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

  return (
    <S.Container>
      <dialog
        className="IMGModal"
        css={css`
          border: 0;
          padding: 0;
          border-radius: 0.5rem;
          &::backdrop {
            background-color: rgba(25, 25, 25, 0.3);
          }
        `}
      >
        <S.IMGModal>
          <S.DashedBox htmlFor="fileInput">
            <img src={I.FileIcon} alt="" />
          </S.DashedBox>
          <S.TotalIMGBox>
            {imgList.map((img: File, id: string) => {
              let isLast = true;
              if (id === imgList.length) isLast = false;
              return (
                <IMGBox
                  picture={img}
                  title={img.name}
                  key={id}
                  id={id}
                  onRemove={onRemove}
                  isLast={isLast}
                />
              );
            })}
          </S.TotalIMGBox>
          <form method="dialog">
            <S.SubmitBTN>등록하기</S.SubmitBTN>
          </form>
        </S.IMGModal>
      </dialog>
      <dialog
        className="MapModal"
        css={css`
          border: 0;
          padding: 0;
          border-radius: 0.5rem;
          &::backdrop {
            background-color: rgba(25, 25, 25, 0.3);
          }
        `}
      >
        <S.MapModal>
          <S.Map></S.Map>
          <form method="dialog">
            <S.SubmitBTN
              css={css`
                margin-top: 9rem;
              `}
            >
              위치등록
            </S.SubmitBTN>
          </form>
        </S.MapModal>
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
      <S.Title>{kind}</S.Title>
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
          <CheckBox
            text="습득"
            value="acquire"
            handleCheck={handleCheck}
            id="acquireCB"
          ></CheckBox>
          <CheckBox
            text="분실"
            value="loss"
            handleCheck={handleCheck}
            id="lossCB"
          ></CheckBox>
        </S.FlexBox>
        <S.FlexBox
          css={css`
            width: 18rem;
          `}
        >
          <RegistrationBox
            svg={I.CameraIcon}
            text="사진 등록하기"
            onClick={() => handleShowModal('IMGModal')}
          />

          <RegistrationBox
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
        <S.SubmitBTN onClick={handleSubmit}>{submitText}</S.SubmitBTN>
      </S.FlexBox>
    </S.Container>
  );
};

export default WriteBox;
