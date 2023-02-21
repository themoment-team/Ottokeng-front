import { ListItem } from '../components';
import { Container } from '../components/ListItem/style';
import { useEffect } from 'react';
import axios from 'axios';
import React from 'react';

const ListPage = () => {
  const getList = async (url: string) => {
    try {
      const res = await axios.post(url);
      const data = res.data;
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const url = ``;
    getList(url);
  }, []);
  return (
    <Container>
      <ListItem />
    </Container>
  );
};

export default ListPage;
