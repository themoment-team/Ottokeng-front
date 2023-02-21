/** @jsxImportSource @emotion/react */
import * as S from './style';
import * as I from '../../assets/svgs';
import { css } from '@emotion/react';
import { CheckBox } from './CheckBox';
import { RegistrationBox } from './RegistrationBox';

interface TextProps {
  title: string;
  submitText: string;
}

const WriteBox = ({ title, submitText }: TextProps) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Input
        placeholder="제목을 입력해주세요."
        css={css`
          height: 48px;
        `}
      />

      <S.Input
        placeholder="본인의 연락처, 분실물의 특징, 위치와 같은 자세한 내용을 입력해주세요."
        css={css`
          height: 240px;
        `}
      />
      <S.Box>
        <S.FlexBox
          css={css`
            width: 154px;
          `}
        >
          <CheckBox text="습득"></CheckBox>
          <CheckBox text="분실"></CheckBox>
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
        <S.SubmitBTN>{submitText}</S.SubmitBTN>
      </S.FlexBox>
    </S.Container>
  );
};

export default WriteBox;
