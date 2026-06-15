import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import { editPost } from "../api/user";
import type { EditPostPayload } from "../types/user";

export const useEditPost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: EditPostPayload) => editPost(data.id, data),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
  });
};
