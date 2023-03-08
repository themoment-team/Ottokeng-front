/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import axios from 'axios';
import * as C from 'components';
import { useEffect, useState } from 'react';

const BoardComment = () => {
  const [comments, setComments] = useState<any[]>([]);

  const getComments = async (url: string) => {
    const res = await axios.post(url);
    const datas = res.data;
    datas.array.forEach((data: any) => {
      setComments([...comments, data]);
    });
  };

  useEffect(() => {
    const url = '';
    getComments(url);
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
        {comments.map((comment: any) => {
          return comment;
        })}
      </div>
    </>
  );
};

export default BoardComment;
