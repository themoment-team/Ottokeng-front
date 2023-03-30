import axios from 'axios';

const url = 'https://server.ottokeng.site';

interface Post {
  id: number;
  title: string;
  content: string;
}

export async function getMyPosts(): Promise<Post[]> {
  const response = await axios.get(`${url}/my-page/post`);
  return response.data;
}

export async function getMyReplies(): Promise<Post[]> {
  const response = await axios.get(`${url}/my-page/comment`);
  return response.data;
}
