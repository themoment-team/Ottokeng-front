import * as C from '../../components';
import { Container } from '../../components/ListItem/style';
import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import { useLocation } from 'react-router-dom';

const ListPage = () => {
  const location = useLocation();

  const [list, setList] = useState<JSX.Element[]>([]);
  const [isModify, setIsModify] = useState<boolean>(false);

  const printList = (datas: Array<object>) => {
    const listItems: JSX.Element[] = datas.map((data: any) => {
      return (
        <C.ListItem
          key={data.id}
          title={data.title}
          inform={data.detail}
          date="date"
          userName="userName"
          chatNum={data.Communication}
          isModify={isModify}
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
    const url = ``;
    getData(url);
  }, []);
  return <Container>{list}</Container>;
};

export default ListPage;
