import { useCreatePost } from "./hooks/useCreatepost";
import { usePosts } from "./hooks/useUsers";
import DataTable from "./components/table/Datatable";
import { useState } from "react";
import { useDeletePost } from "./hooks/useDelete";
// import { useEditPost } from "./hooks/useEditPost";
import type { Post } from "./types/user";
import { useEditPost } from "./hooks/useEditPost";

function App() {
  const [title, setTitle] = useState("");

  const [editingPost, setEditingPost] = useState<Post | null>(null);

  const { data = [] } = usePosts();

  const createPostMutation = useCreatePost();

  const deletePostMutation = useDeletePost();

  const editPostMutation = useEditPost();

  // const handleCreate = () => {
  //   createPostMutation.mutate(
  //     {
  //       title,
  //     },
  //     {
  //       onSuccess: () => {
  //         setTitle("");
  //       },
  //     },
  //   );
  // };

  // console.log(editingPost);

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
      <button onClick={handleSubmit}>
        {editingPost ? "Update Post" : "Create Post"}
      </button>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title"
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
