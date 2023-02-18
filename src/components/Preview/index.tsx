/** @jsxImportSource @emotion/react */
import * as S from './style';
import * as I from '../../assets/svgs';
import { css } from '@emotion/react';
import { PreviewBox } from './PreviewBox';
import { useState } from 'react';
import { PlulsBtn } from './PlusBtn';
import KakaoMap from './KakaoMap';
const Preview = () => {
  const [description, setDescription] = useState(
    '0000년 00월 00일 00에서 00을 잃어버렸음.보신분 연락해주세요',
  );
  return (
    <div
      css={css`
        height: 1688px;
      `}
    >
      <KakaoMap text="내 위치 주변의 게시글을 확인해 보세요!"></KakaoMap>
      <PreviewBox text={description} svg={<I.ArrowIcon />}></PreviewBox>
      <PlulsBtn svg={<I.PlusIcon />}></PlulsBtn>
    </div>
  );
};

export default Preview;
