/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as C from 'components';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const BoardComment = () => {
  const [datas, setDatas] = useState<any[]>([1]);
  const { state } = useLocation();

  const getComments = async () => {
    state.comments.forEach((data: any) => {
      setDatas([...datas, data]);
    });
  };

  useEffect(() => {
    getComments();
  }, []);

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
        {datas.map((data: any) => {
          return (
            <C.Comment
              key={data.commentId}
              user={data.writer}
              date={data.createdAt}
              content={data.contents}
              picture={data.profileImg}
            />
          );
        })}
      </div>
    </>
  );
};

export default BoardComment;
