import type { Post } from "../../types/user";

import { Input } from "@/components/ui/input";
import { Field, FieldLabel } from "../ui/field";
import { Button } from "../ui/button";

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
  return (
    <div>
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

      <div className="flex flex-wrap items-center gap-2 md:flex-row">
        <Button variant="outline" onClick={handleSubmit} disabled={!title}>
          {editingPost ? "Update Post" : "Create Post"}
        </Button>
      </div>
    </div>
  );
};

export default PostForm;
