import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters long"),
  body: z.string().min(5, "Body must be at least 5 characters long"),
  userId: z.string().or(z.number().min(1, "User ID must be at least 1")),
});
type Form = z.infer<typeof formSchema>;

const AddPost = ({ postId }: { postId: number }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({
    resolver: zodResolver(formSchema),
  });
  console.log("AddPost component rendered ---", postId);
  const queryClient = useQueryClient();

  const addPost = useMutation({
    mutationFn: async (data: Form) => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );

      if (!response.ok) {
        console.log("response", response);
        throw new Error("Network response was not ok");
      }
      queryClient.setQueryData(["posts"], (oldData: any) => {
        return [...oldData, { id: 1, ...data }];
      });
      console.log("response", await response.json());
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const onSubmit = (data: Form) => {
    addPost.mutate({
      userId: Number(data.userId),
      title: data.title,
      body: data.body,
    });
    console.log("Form data submitted:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-lg mx-auto mt-10"
    >
      <p>UserID: {postId}</p>
      <input
        type="number"
        id="userId"
        hidden
        value={postId}
        className="border p-1 m-2 rounded-md"
        {...register("userId")}
      />
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          className="border p-1 m-2 rounded-md"
          {...register("title")}
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
      </div>
      <div>
        <label htmlFor="body">Body:</label>
        <input
          type="text"
          id="body"
          className="border p-1 m-2 rounded-md"
          {...register("body")}
        />
        {errors.body && <p className="text-red-500">{errors.body.message}</p>}
      </div>
      <button type="submit" className="border p-2 m-2">
        Submit
      </button>
    </form>
  );
};

export default React.memo(AddPost);
