/** @jsxImportSource @emotion/react */
import * as S from './style';
import * as I from '../../assets/svgs';
import { css } from '@emotion/react';
import { CheckBoxs } from './CheckBox';
import { RegistrationBox } from './RegistrationBox';

const WriteBox = ({
  title,
  submitText,
}: {
  title: string;
  submitText: string;
}) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Input
        css={css`
          height: 48px;
        `}
      />
      <S.Input
        css={css`
          height: 240px;
        `}
      />
      <S.Box>
        <CheckBoxs text="습득"></CheckBoxs>
        <CheckBoxs text="분실"></CheckBoxs>
        <RegistrationBox
          svg={<I.CameraIcon />}
          text="사진 등록하기"
        ></RegistrationBox>
        <RegistrationBox
          svg={<I.LocationIcon />}
          text="위치 등록하기"
        ></RegistrationBox>
      </S.Box>
      <S.SubmitBTN>등록하기</S.SubmitBTN>
    </S.Container>
  );
};

export default WriteBox;
