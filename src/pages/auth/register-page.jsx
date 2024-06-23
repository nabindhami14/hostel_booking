import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";

import { Input, Button } from "@headlessui/react";

import ErrorMessage from "../../components/common/error";

const schema = yup
  .object({
    name: yup.string().required("Name is required!"),
    email: yup
      .string()
      .email("Must be a valid email!")
      .required("Email is required!"),
    password: yup.string().min(6, "Password must be 6 characters long!"),
  })
  .required();

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => console.log(data);

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center space-y-4"
      >
        <div className="space-y-2 w-full">
          <label htmlFor="name">Name</label>
          <Input
            type="name"
            id="name"
            {...register("name", { required: true, maxLength: 20 })}
            className="p-2 rounded-md border w-full outline-purple-200"
          />
          <ErrorMessage message={errors.name?.message} />
        </div>
        <div className="space-y-2 w-full">
          <label htmlFor="email">Email</label>
          <Input
            type="email"
            id="email"
            {...register("email", { required: true, maxLength: 20 })}
            className="p-2 rounded-md border w-full outline-purple-200"
          />
          <ErrorMessage message={errors.email?.message} />
        </div>
        <div className="space-y-2 w-full">
          <label htmlFor="password">Password</label>
          <Input
            type="password"
            id="password"
            {...register("password", { required: true })}
            className="p-2 rounded-md border w-full outline-purple-200"
          />
          <ErrorMessage message={errors.password?.message} />
        </div>
        <Button
          type="submit"
          className="p-2 w-full bg-purple-500 rounded-md hover:bg-purple-600 transition-colors text-white"
        >
          Continue
        </Button>
      </form>

      <div className="w-full flex justify-end">
        <span>Already have an account? </span>
        <Link to={`/auth/login`} className="ml-1 underline">
          Login
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
