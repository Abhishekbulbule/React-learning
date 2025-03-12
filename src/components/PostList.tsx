import React from "react";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostListProps {
  data: Post[];
}

const PostList: React.FC<PostListProps> = ({ data }) => {
  console.log("PostList component rendered");
  return (
    <>
      {data.map((post, index) => (
        <div className="border rounded-lg p-2 w-[40%] h-[100%]" key={index}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </>
  );
};

export default React.memo(PostList);
