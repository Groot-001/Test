import { useCreatePost } from "./hooks/useCreatepost";
import { usePosts } from "./hooks/useUsers";
import DataTable from "./components/table/Datatable";
import { useState } from "react";
import { useDeletePost } from "./hooks/useDelete";
// import { useEditPost } from "./hooks/useEditPost";
import type { Post } from "./types/user";
import { useEditPost } from "./hooks/useEditPost";
import PostForm from "./components/table/PostForm";

function App() {
  const [title, setTitle] = useState("");

  const [editingPost, setEditingPost] = useState<Post | null>(null);

  const { data = [] } = usePosts();

  const createPostMutation = useCreatePost();

  const deletePostMutation = useDeletePost();

  const editPostMutation = useEditPost();

  const handleSubmit = () => {
    console.log("Submitting form with title:");
    console.log(editingPost);

    if (editingPost) {
      editPostMutation.mutate(
        {
          id: editingPost.id,
          title,
        },
        {
          onSuccess: () => {
            setTitle("");
            setEditingPost(null);
          },
        },
      );
    } else {
      createPostMutation.mutate(
        {
          title,
        },
        {
          onSuccess: () => {
            setTitle("");
          },
        },
      );
    }
  };

  const handleEdit = (post: Post) => {
    setEditingPost(post);
    setTitle(post.title);
  };

  const handleDelete = (id: number) => {
    deletePostMutation.mutate(id);
  };

  return (
    <>
      <PostForm
        title={title}
        setTitle={setTitle}
        handleSubmit={handleSubmit}
        editingPost={editingPost}
      />
      <DataTable
        data={data}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </>
  );
}

export default App;
