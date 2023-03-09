/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import axios from 'axios';
import * as C from 'components';
import { useEffect, useState } from 'react';

const BoardComment = () => {
  const [datas, setDatas] = useState<any[]>([1, 2, 3]);

  const getComments = async (url: string) => {
    const res = await axios.post(url + 'accessToken');
    const datas = res.data;
    datas.array.forEach((data: any) => {
      setDatas([...datas, data]);
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
        {datas.map((data: any) => {
          return (
            <C.Comment
              key={data.commentId}
              user={data.writer}
              date={data.createdAt}
              content={data.contents}
              picture={data.commentId}
            />
          );
        })}
      </div>
    </>
  );
};

export default BoardComment;
