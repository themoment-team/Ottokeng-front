/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';
import { useState } from 'react';
interface Post {
  id: number;
  title: string;
  contents: string;
  createdAt: string;
  imageUrls: [string];
  writer: string;
}

interface PostListProps {
  posts: Post[];
}

function PostList({ posts }: PostListProps) {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        width: 960px;
        background-color: #ffff;
        justify-content: center;
        align-items: center;
      `}
    >
      {posts.map(post => (
        <S.PostItem key={post.id}>
          <div
            css={css`
              background-image: url(${post.imageUrls[0]});
              width: 50px;
              height: 50px;
            `}
          ></div>
          <div>
            <S.Title>{post.title}</S.Title>
            <S.Contents>{post.contents}</S.Contents>
            <S.Writer>
              {post.createdAt.split('T')[0]} &nbsp; 작성자 : {post.writer}
            </S.Writer>
          </div>
        </S.PostItem>
      ))}
    </div>
  );
}

export default PostList;
