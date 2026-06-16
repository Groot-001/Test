// const PostPage = () => {
//   const [title, setTitle] = useState("");

//   const [editingPost, setEditingPost] = useState<Post | null>(null);

//   const { data = [] } = usePosts();

//   const createPostMutation = useCreatePost();

//   const deletePostMutation = useDeletePost();

//   const editPostMutation = useEditPost();

//   const handleSubmit = () => {
//     console.log("Submitting form with title:");
//     console.log(editingPost);

//     if (editingPost) {
//       editPostMutation.mutate(
//         {
//           id: editingPost.id,
//           title,
//         },
//         {
//           onSuccess: () => {
//             setTitle("");
//             setEditingPost(null);
//           },
//         },
//       );
//     } else {
//       createPostMutation.mutate(
//         {
//           title,
//         },
//         {
//           onSuccess: () => {
//             setTitle("");
//           },
//         },
//       );
//     }
//   };

//   const handleEdit = (post: Post) => {
//     setEditingPost(post);
//     setTitle(post.title);
//   };

//   const handleDelete = (id: number) => {
//     deletePostMutation.mutate(id);
//   };

//   return <div>Hello Post Page</div>;
// };

// export default PostPage;
