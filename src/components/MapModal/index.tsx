/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';

const MapModal = () => {
  return (
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
  );
};

export default MapModal;
