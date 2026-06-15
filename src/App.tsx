import { useCreatePost } from "./hooks/useCreateUser";
import { usePosts } from "./hooks/useUsers";
import DataTable from "./components/table/Datatable";
import { useState } from "react";
import { useDeletePost } from "./hooks/useDelete";

function App() {
  const [title, setTitle] = useState("");

  const { data = [] } = usePosts();

  const createPostMutation = useCreatePost();

  const deletePostMutation = useDeletePost();

  const handleCreate = () => {
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
  };

  const handleDelete = (id: number) => {
    deletePostMutation.mutate(id);
  };

  return (
    <>
      <button
        onClick={handleCreate}
        disabled={!title.trim() || createPostMutation.isPending}
        className="rounded-md bg-blue-600 px-4 py-2 text-white disabled:cursor-not-allowed disabled:opacity-50"
      >
        {createPostMutation.isPending ? "Creating..." : "Create Post"}
      </button>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title"
      />
      
      <DataTable data={data} />
    </>
  );
}

export default App;
