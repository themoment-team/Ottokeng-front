import axios from 'axios';

const url = 'https://server.ottokeng.site';

interface Post {
  id: number;
  title: string;
  contents: string;
  createdAt: string;
  imageUrls: [string];
  writer: string;
}

export async function getMyPosts(): Promise<Post[]> {
  localStorage.setItem(
    'token',
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMTM4OTQ3NTAyODI0OTQ4NjM3MzciLCJpYXQiOjE2ODA0MTI0ODUsImV4cCI6MTY4MDQyMzI4NX0.3yePXOi7n5DZpTmtTaWg5XYxiqQNrvxD0kz5pSSP6UY',
  );
  localStorage.setItem(
    'refreshToken',
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMTM4OTQ3NTAyODI0OTQ4NjM3MzciLCJpYXQiOjE2ODA0MTI0ODUsImV4cCI6MTY4ODE4ODQ4NX0.46tt3Hc5m1Q8jD08TzTm4YBP44pUMHZgQ4ne4Jdkmg4',
  );

  const response = await axios.get(`${url}/my-page/post`, {
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  });
  console.log(response.data);
  return response.data;
}

export async function getMyReplies(): Promise<Post[]> {
  const response = await axios.get(`${url}/my-page/comment`, {
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  });
  return response.data;
}
