/** @jsxImportSource @emotion/react */
import * as S from './style';
import * as I from '../../assets/svgs';
import { css } from '@emotion/react';
import { CheckBox } from './CheckBox';
import { RegistrationBox } from './RegistrationBox';
import { useState } from 'react';
import S3 from 'react-aws-s3-typescript';

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
  let picture: File;

  // interface configInterFace {
  //   bucketName: string;
  //   region: string;
  //   accessKeyId: string;
  //   secretAccessKey: string;
  // }

  const config = {
    bucketName: process.env.REACT_APP_BUCKET_NAME!,
    region: process.env.REACT_APP_REGION!,
    accessKeyId: process.env.REACT_APP_ACCESS!,
    secretAccessKey: process.env.REACT_APP_SECRET!,
  };

  const s3Upload = async (picture: File) => {
    const ReactS3Client = new S3(config);
    ReactS3Client.uploadFile(picture, picture.name)
      .then(data => {
        console.log(data.location);
      })
      .catch((err: string) => console.error(err));
  };

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

  const handleSubmit = () => {
    if (title !== '' && content !== '' && check !== '') {
      //통과
      s3Upload(picture);
    } else {
      // 거름
      console.log('안 돼 돌아가');
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files !== null) {
      picture = e.target.files[0];
    }
  };
  
  return (
    <S.Container>
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
            svg={<I.CameraIcon />}
            fileInput="fileInput"
            text="사진 등록하기"
          />
          <input
            // value={picture}
            type="file"
            id="fileInput"
            css={css`
              display: none;
            `}
            onChange={handleFileChange}
          />
          <RegistrationBox
            svg={<I.LocationIcon />}
            fileInput=""
            text="위치 등록하기"
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
