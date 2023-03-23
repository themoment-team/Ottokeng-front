/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';
import React from 'react';

interface Post {
  id: number;
  title: string;
  content: string;
}

interface PostListProps {
  posts: Post[];
}

function PostList({ posts }: PostListProps) {
  return (
    <div>
      {posts.map(post => (
        <S.PostItem key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </S.PostItem>
      ))}
    </div>
  );
}

export default PostList;
