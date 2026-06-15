export interface Post {
  id: number;
  title: string;
}

export interface CreatePostPayload {
  title: string;
}

export interface EditPostPayload {
  id: number;
  title: string;
}
