/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as I from 'assets/svgs';
import * as S from './style';
import { useEffect } from 'react';
import { useState } from 'react';
import * as C from 'components';
import axios from 'axios';
import { getMyPosts, getMyReplies } from 'data/myData';

const UserPage = () => {
  interface Post {
    id: number;
    title: string;
    content: string;
  }
  const [myPosts, setMyPosts] = useState<Post[]>([]);
  const [myReplies, setMyReplies] = useState<Post[]>([]);
  const title = ['내가 쓴글', '내가 답변한 글'];
  const imageUrl = localStorage.getItem('profileImg');

  useEffect(() => {
    async function getData() {
      const posts = await getMyPosts();
      const replies = await getMyReplies();
      setMyPosts(posts);
      setMyReplies(replies);
    }
    getData();
  }, []);
  return (
    <>
      <C.Header />
      <S.Container>
        <C.User imageUrl={imageUrl} />
        <S.UserBtnBox>
          {title.map((elm, index) => {
            return <C.UserBtn title={title[index]} key={index} />;
          })}
        </S.UserBtnBox>
        <C.PostList posts={myPosts} />
        <C.PostList posts={myReplies} />
      </S.Container>
    </>
  );
};

export default UserPage;
