import axios from "axios";
import type { Post } from "../types/user";
import type { CreatePostPayload } from "../types/user";

export const getPosts = async (): Promise<Post[]> => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts",
  );

  // console.log(response);

  return response.data;
};

export const createPost = async (post: CreatePostPayload) => {
  const response = await axios.post(
    "https://jsonplaceholder.typicode.com/posts",
    post,
  );

  console.log(response);
  console.log(response.data);

  return response.data;
};

export const deletePost = async (id: number) => {
  const response = await axios.delete(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );

  console.log(response);

  return response.data;
}
