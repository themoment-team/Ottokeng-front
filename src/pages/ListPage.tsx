import { ListItem } from '../components';
import { Container } from '../components/ListItem/style';
import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';

const ListPage = () => {
  const [list, setList] = useState<JSX.Element[]>([]);

  interface data {
    title: string;
    date: string;
    name: string;
    detail: string;
    image: string;
    adress: string;
    Communication: string;
  }

  const printList = (datas: Array<object>) => {
    const listItems: JSX.Element[] = datas.map((data: any) => {
      return (
        <ListItem
          title={data.title}
          inform={data.detail}
          date="data"
          userName="userName"
          chatNum={data.Communication}
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
      console.log(err);
    }
  };

  useEffect(() => {
    const url = ``;
    getData(url);
  }, []);
  return <Container>{list}</Container>;
};

export default ListPage;
