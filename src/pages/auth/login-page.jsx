import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Input, Button } from "@headlessui/react";
import { Link } from "react-router-dom";

import ErrorMessage from "../../components/common/error";
import { toast } from "react-toastify";

const schema = yup
  .object({
    email: yup
      .string()
      .email("Must be a valid email!")
      .required("Email is required!"),
    password: yup.string().min(6, "Password must be 6 characters long!"),
  })
  .required();

const LoginPage = () => {
  const notify = () =>
    toast.error("LOGGED IN", {
      position: "bottom-right",
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    console.log(data);
    notify();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center space-y-4"
      >
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

      <div className="w-full flex flex-col items-end">
        <Link to={`/auth/forgot-password`} className="ml-1 underline">
          Forgot Password
        </Link>

        <div>
          <span>Don&apos;t have an account? </span>
          <Link to={`/auth/register`} className="ml-1 underline">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
