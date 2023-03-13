import * as C from 'components';
import { Container } from 'components/ListItem/style';
import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import { useLocation } from 'react-router-dom';

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
    const listItems: JSX.Element[] = datas.map((data: datas) => {
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
      const res = await axios.get(url + '/' + 'Authorization');
      const data = res.data;
      console.log(data);
      printList(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    location.pathname === '/list' && setIsModify(true);
    const url = `https://abcd/post/writing`;
    getData(url);
  }, [reload]);
  return <Container>{list}</Container>;
};

export default ListPage;
