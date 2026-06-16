import Datatable from "@/components/table/Datatable";
import PostForm from "@/components/table/PostForm";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useCreatePost } from "@/hooks/useCreatepost";
import { useDeletePost } from "@/hooks/useDelete";
import { useEditPost } from "@/hooks/useEditPost";
import { usePosts } from "@/hooks/useUsers";
import type { Post } from "@/types/user";
import { useState } from "react";

const PostPage = () => {
  const [title, setTitle] = useState("");

  const [editingPost, setEditingPost] = useState<Post | null>(null);

  const [deletePostId, setDeletePostId] = useState<number | null>(null);

  const { data = [] } = usePosts();

  const createPostMutation = useCreatePost();

  const deletePostMutation = useDeletePost();

  const editPostMutation = useEditPost();

  const handleSubmit = () => {
    // console.log("Submitting form with title:");
    // console.log(editingPost);

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
    // console.log("id:", id);
    setDeletePostId(id);
  };

  const handleConfirmDelete = () => {
    // console.log("confirming delete for id:", deletePostId);
    if (!deletePostId) return;

    deletePostMutation.mutate(deletePostId);

    setDeletePostId(null);
  };

  console.log("delete id :", deletePostId);

  const handleCancelDelete = () => {
    setDeletePostId(null);
  };

  return (
    <div>
      <PostForm
        editingPost={editingPost}
        handleSubmit={handleSubmit}
        setTitle={setTitle}
        title={title}
      />

      {deletePostId && (
        <AlertDialog
          open={deletePostId !== null}
            onOpenChange={(open) => {
              if (!open) {
                setDeletePostId(null);
              }
            }}
        >
          <AlertDialogTrigger asChild>
            <Button variant="outline">Show Dialog</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={handleCancelDelete}>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction onClick={handleConfirmDelete}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      )}

      <Datatable
        data={data}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default PostPage;
