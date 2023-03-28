/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as I from 'assets/svgs';
import * as S from './style';
import { useEffect } from 'react';
import { User, UserBtn } from 'components';
import { useState } from 'react';
import * as C from 'components';
import { PostList } from 'components';
import { getMyPosts, getMyReplies } from 'data/myData';

const UserPage = () => {
  interface Post {
    id: number;
    title: string;
    content: string;
  }
  const [myPosts, setMyPosts] = useState<Post[]>([]);
  const [myReplies, setMyReplies] = useState<Post[]>([]);

  useEffect(() => {
    async function getData() {
      const posts = await getMyPosts();
      const replies = await getMyReplies();
      setMyPosts(posts);
      setMyReplies(replies);
    }
    getData();
  }, []);
  const [select, isSelect] = useState<Boolean>(false);
  const title = ['내가 쓴글', '내가 답변한 글'];

  return (
    <>
      <C.Header />
      <S.Container>
        <User imageUrl=""></User>
        <S.UserBtnBox>
          {title.map((elm, index) => {
            return <UserBtn title={title[index]} key={index}></UserBtn>;
          })}
        </S.UserBtnBox>
        <PostList posts={myPosts} />
        <PostList posts={myReplies} />
      </S.Container>
    </>
  );
};

export default UserPage;
