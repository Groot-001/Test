import PostPage from "@/pages/PostPage";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/postpage")({
  component: PostPage,
});
