import { useRegisterUserMutation } from "@/api/auth/auth";
import { RegisterUserData } from "@/api/auth/auth.types";
import { PageWrapper } from "@/components/design-systems/PageWrapper";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<RegisterUserData>();
  const { mutate: registerUser, isPending, error } = useRegisterUserMutation();

  const onSubmit = (data: RegisterUserData) => {
    registerUser(data, {
      onSuccess: () => {
        toast.success("Registration successful!");
        reset();
      },
      onError: (err) => {
        toast.error(err.message);
        console.error("Registration failed:", err);
      },
    });
  };

  return (
    <div className="bg-light-brown py-20">
      <ToastContainer position="top-right" autoClose={3000} />
      <PageWrapper className="flex flex-col justify-center items-center w-full">
        <h2 className="text-center text-2xl font-semibold mb-6 text-brown-primary">
          {t("register.createAccount")}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md p-6 w-full">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              {t("main.name")}
            </label>
            <input
              type="text"
              id="name"
              {...register("name", { required: "Name is required" })}
              className="w-full px-3 py-2 border-2 border-brown-primary bg-transparent rounded-lg"
            />
            {errors.name && (
              <p className="text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              {t("main.email")}
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format",
                },
              })}
              className="w-full px-3 py-2 border-2 border-brown-primary bg-transparent rounded-lg"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              {t("main.password")}
            </label>
            <input
              type="password"
              id="password"
              {...register("password", { required: "Password is required" })}
              className="w-full px-3 py-2 border-brown-primary bg-transparent border-2 rounded"
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-brown-secondary text-white rounded transition-opacity duration-300 hover:opacity-80"
            disabled={isPending}
          >
            {isPending ? "Registering..." : t("register.create")}
          </button>

          {error && (
            <p className="text-red-600 mt-4">
              Registration failed. Please try again.
            </p>
          )}
        </form>
        <p>
          {t("register.haveAccount")}{" "}
          <Link to="/login" className="underline">
            {t("main.login")}
          </Link>
        </p>
      </PageWrapper>
    </div>
  );
};

export default Register;
