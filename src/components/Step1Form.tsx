import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

function ProfileForm() {
  const formSchema = z
    .object({
      name: z.string().min(2, "Name must be at least 2 characters long"),
      email: z
        .string()
        .email("Please provide a valid email address")
        .min(5, "Email is required"),
      phone: z
        .string()
        .regex(
          /^\d{10}$/,
          "Phone number must be exactly 10 digits and contain only numbers"
        )
        .min(10, "Phone number must be at least 10 digits long")
        .max(10, "Phone number must be at most 10 digits long"),
      gender: z.string(),
    })
    .required();
  type Form = z.infer<typeof formSchema>;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: Form) => {
    console.log("Form data submitted:", data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center items-center mt-5 w-1/3 mx-auto"
    >
      <h2 className="text-center font-bold text-3xl mb-4">
        Form using Zod and react hook form
      </h2>
      <div className="flex flex-row w-full mt-3">
        <label htmlFor="name">Name:</label>
        <input
          className="border p-1.5 rounded-md mx-2 w-full"
          {...register("name")}
        />
      </div>
      {errors.name && <p className="text-red-500  ">{errors.name.message}</p>}

      <div className="flex flex-row w-full mt-3">
        <label htmlFor="email">Email:</label>
        <input
          className="border p-1.5 rounded-md mx-2 w-full"
          {...register("email")}
        />
      </div>
      {errors.email && <p className="text-red-500 ">{errors.email.message}</p>}
      <div className="flex flex-row w-full mt-3">
        <label htmlFor="phone">Phone:</label>
        <input
          className="border p-1.5 rounded-md mx-2 w-full"
          type="tel"
          {...register("phone")}
        />
      </div>
      {errors.phone && <p className="text-red-500 ">{errors.phone.message}</p>}

      <div className="flex flex-row w-full mt-3">
        <label htmlFor="gender">Gender:</label>
        <select
          className="border p-1.5 rounded-md mx-2 w-full"
          {...register("gender")}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="others">Others</option>
        </select>
      </div>
      {errors.gender && (
        <p className="text-red-500 ">{errors.gender.message}</p>
      )}

      <button className="p-2 mt-4 border rounded-md " type="submit">
        Submit
      </button>
    </form>
  );
}

export default ProfileForm;
