import React, { Suspense } from "react";
import useQueryhook from "../hooks/useQueryhook";

const PostList = React.lazy(() => import("./PostList"));
const AddPost = React.lazy(() => import("./AddPost"));

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
const Posts = () => {
  console.log("Posts component rendered");
  const [page, setPage] = React.useState(1);
  const { data, isLoading, error } = useQueryhook<Post[]>(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=10`,
    // `https://jsonplaceholder.typicode.com/posts`,
    "posts",
    page
  );
  if (error) return <h2>Something went wrong</h2>;
  return (
    <div className="w-screen d-flex justify-items-center items-center mb-5">
      <h2 className="text-2xl m-4 font-bold">Posts</h2>
      <AddPost postId={page} />
      <button
        className="border m-5 rounded-lg p-1 px-3"
        onClick={() => setPage(page - 1)}
      >
        Back
      </button>
      <button
        className="border m-5 rounded-lg p-1 px-3"
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
      <div className="flex flex-row flex-wrap gap-5 items-start justify-center">
        <Suspense fallback={<h2>Loading Posts...</h2>}>
          {isLoading ? (
            <h2>Loading posts ...</h2>
          ) : error ? (
            <h2>Something went wrong!!</h2>
          ) : data && data.length > 0 ? (
            <PostList data={data} />
          ) : (
            <h2>No posts found</h2>
          )}
        </Suspense>
      </div>
    </div>
  );
};

export default React.memo(Posts);
