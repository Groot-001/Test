import type { Post } from "../../types/user";

import { Input } from "@/components/ui/input";
import { Field, FieldLabel, FieldGroup } from "../ui/field";
import { Button } from "../ui/button";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

import { DialogClose, DialogFooter } from "@/components/ui/dialog";

interface PostFormProps {
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: () => void;
  editingPost: Post | null;
  isCreateOpen: boolean;
  setIsCreateOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const PostForm = ({
  title,
  setTitle,
  handleSubmit,
  editingPost,
  isCreateOpen,
  setIsCreateOpen,
}: PostFormProps) => {
  return (
    <div>
      <Dialog open={isCreateOpen} onOpenChange={() => setIsCreateOpen(false)}>
        <form>
          <DialogContent className="sm:max-w-sm">
            <DialogHeader>
              <DialogTitle>Create Post</DialogTitle>
            </DialogHeader>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="title">Title</FieldLabel>
                <Input
                  value={title}
                  id="title"
                  type="text"
                  placeholder="Enter Your Title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Field>
            </FieldGroup>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit" onClick={handleSubmit}>
                Create
              </Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>

      <div className="mt-4 flex justify-end mx-28">
        <Button variant="destructive" onClick={() => setIsCreateOpen(true)}>
          {editingPost ? "Update Post" : "Create Post"}
        </Button>
      </div>
    </div>
  );
};

export default PostForm;
