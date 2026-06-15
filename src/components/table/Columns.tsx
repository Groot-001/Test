// components/table/columns.tsx

import type { ColumnDef } from "@tanstack/react-table";
import type { Post } from "../../types/user";

export const columns: ColumnDef<Post>[] = [
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
      <button onClick={() => handleDelete(row.original.id)}>Delete</button>
    ),
  },
];
