/** @jsxImportSource @emotion/react */
import * as S from './style';
import * as I from '../../assets/svgs';
import { css } from '@emotion/react';
import { CheckBox } from './CheckBox';
import { RegistrationBox } from './RegistrationBox';
import { useState } from 'react';

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

  const changeChecked = (e: string) => {
    const delCheck = document.getElementById(`${e}CB`) as HTMLInputElement;
    delCheck.checked = false;
  };

  const handleCheck = (e: any) => {
    if (e.target.checked) {
      setCheck(e.target.value);
      e.target.value === 'acquire'
        ? changeChecked('loss')
        : changeChecked('acquire');
    } else setCheck('');
  };

  const handleSubmit = (e: any) => {
    if (title !== '' && content !== '' && check !== '') {
      //통과
      console.log('좋아');
    } else {
      // 거름
      console.log('안 돼 돌아가');
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
          height: 46px;
        `}
      />

      <S.TextArea
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="본인의 연락처, 분실물의 특징, 위치와 같은 자세한 내용을 입력해주세요."
        css={css`
          height: 218px;
        `}
      />
      <S.Box>
        <S.FlexBox
          css={css`
            width: 154px;
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
            width: 288px;
          `}
        >
          <RegistrationBox
            svg={<I.CameraIcon />}
            text="사진 등록하기"
          ></RegistrationBox>
          <RegistrationBox
            svg={<I.LocationIcon />}
            text="위치 등록하기"
          ></RegistrationBox>
        </S.FlexBox>
      </S.Box>
      <S.FlexBox
        css={css`
          width: 820px;
          justify-content: center;
          margin-top: 186px;
        `}
      >
        <S.SubmitBTN onClick={handleSubmit}>{submitText}</S.SubmitBTN>
      </S.FlexBox>
    </S.Container>
  );
};

export default WriteBox;
