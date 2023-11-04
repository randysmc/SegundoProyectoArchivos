import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: RegisterErrors } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/documents");
  }),
    [isAuthenticated];

  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (

    <div className="bg-gray-800 max-w-md p-10 rounded-md">
      {
      RegisterErrors.map((error, i) => (
        <div className="bg-red-500 p-2 text-white" key={i}>
          {error}
          </div>
      ))}

      <form onSubmit={onSubmit}>
        <input
          type="text"
          {...register("username", { required: true })}
          className="w-full bg-gray-500 text-green-400 px-4 py-3 rounded-md my-2"
          placeholder="Username"
        />

        {errors.username && (
          <p className="text-red-500"> Username is required</p>
        )}

        <input
          type="password"
          {...register("password", { required: true })}
          className="w-full bg-gray-500 text-green-400 px-4 py-3 rounded-md my-3"
          placeholder="Password"
        />
        {errors.password && (
          <p className="text-red-500"> Password is required</p>
        )}
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
