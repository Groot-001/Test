// components/table/columns.tsx

import type { ColumnDef } from "@tanstack/react-table";
import type { Post } from "../../types/user";
import { Button } from "../ui/button";
import { Pencil, Trash2 } from "lucide-react";

export const columns = (
  handleDelete: (id: number) => void,
  handleEdit: (post: Post) => void,
): ColumnDef<Post>[] => [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => (
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleEdit(row.original)}
        >
          <Pencil className="h-4 w-4" />
          Edit
        </Button>

        <Button
          variant="destructive"
          size="sm"
          onClick={() => handleDelete(row.original.id)}
        >
          <Trash2 className="h-4 w-4" />
          Delete
        </Button>
      </div>
    ),
  },
];
