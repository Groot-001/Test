import VisitorTable from "@/pages/Visitortable";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/visitor")({
  component: VisitorTable,
});
