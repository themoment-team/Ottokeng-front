/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import * as S from './style';

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
        width: 626px;
        height: 100px;
      `}
    >
      {posts.map(post => (
        <S.PostItem key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.contents}</p>
          {post.createdAt}
          <div
            css={css`
              background-image: url(${post.imageUrls[0]});
            `}
          ></div>
          {post.writer}
        </S.PostItem>
      ))}
    </div>
  );
}

export default PostList;
