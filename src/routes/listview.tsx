import ListView from "@/pages/leadview/ListView";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/listview")({
  component: ListView,
});
