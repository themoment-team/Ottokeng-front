/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as C from 'components';

const BoardComment = () => {
  return (
    <>
      <div
        css={css`
          width: 32.5rem;
          margin: 0 auto;
          height: 18.75rem;
          margin-top: 1.5rem;
          ::-webkit-scrollbar {
            display: none; /* Chrome, Safari, Opera*/
          }
          overflow-y: scroll;
          overflow-x: hidden;
        `}
      >
        <C.Comment></C.Comment>
        <C.Comment></C.Comment>
        <C.Comment></C.Comment>
        <C.Comment></C.Comment>
        <C.Comment></C.Comment>
        <C.Comment></C.Comment>
      </div>
    </>
  );
};

export default BoardComment;
