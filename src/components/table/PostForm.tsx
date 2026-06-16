import { useState } from "react";
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
}

const PostForm = ({
  title,
  setTitle,
  handleSubmit,
  editingPost,
}: PostFormProps) => {
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  return (
    <div>
      {isCreateOpen && (
        <Dialog
          open={isCreateOpen == true}
          onOpenChange={() => setIsCreateOpen(false)}
        >
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
                  Save changes
                </Button>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>
      )}

      <div className="flex flex-wrap items-center gap-2 md:flex-row mx-0 md:mx-2 mt-4">
        <Button variant="destructive" onClick={() => setIsCreateOpen(true)}>
          {editingPost ? "Update Post" : "Create Post"}
        </Button>
      </div>
    </div>
  );
};

export default PostForm;
