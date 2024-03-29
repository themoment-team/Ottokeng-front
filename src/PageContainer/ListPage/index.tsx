/** @jsxImportSource @emotion/react */
import * as C from 'components';
import { Container } from 'components/ListItem/style';
import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import { useLocation } from 'react-router-dom';
import { css } from '@emotion/react';

const ListPage = () => {
  const location = useLocation();

  const [list, setList] = useState<JSX.Element[]>([]);
  const [isModify, setIsModify] = useState<boolean>(false);
  const [reload, setReload] = useState<boolean>(true);

  type datas = {
    id: string;
    title: string;
    contents: string;
    writer: string;
    acquire: 'GET';
    address: string;
    type: 'LOST_WRITING' | 'FIND_WRITING';
    createdAt: string;
    imageUrls: [string];
  };

  const printList = (datas: Array<datas>) => {
    const listItems: JSX.Element[] = datas.reverse().map((data: datas) => {
      return (
        <C.ListItem
          key={data.id}
          datas={data}
          isModify={isModify}
          setReload={setReload}
          reload={reload}
        />
      );
    });
    setList(list => [...list, ...listItems]);
  };

  const getData = async (url: string) => {
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: localStorage.getItem('token'),
        },
      });
      const data = res.data;
      console.log(data);
      printList(data.list);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    location.pathname === '/list' && setIsModify(true);
    const url = `https://server.ottokeng.site/post/writing`;
    getData(url);
  }, [reload]);

  interface UserProps {
    name: string;
    userImg: string;
  }

  let init: UserProps = {
    name: 'Anon',
    userImg: 'img',
  };
  const [header, setHeader] = useState<UserProps>(init);

  return (
    <>
      <C.Header />
      <div
        css={css`
          width: 100vw;
          height: 100vh;
        `}
      >
        <div
          css={css`
            margin-top: 8rem;
            background-color: #f1f1f5;
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100vw;
            justify-content: center;
          `}
        >
          <Container
            css={css`
              display: flex;
              flex-direction: column;
              align-items: center;
              width: 1000px;
              justify-content: center;
              background-color: white;
            `}
          >
            {list}
          </Container>
        </div>
        <C.Footer />
      </div>
    </>
  );
};

export default ListPage;
