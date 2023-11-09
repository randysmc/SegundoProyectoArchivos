import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signin, errors: signinErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    signin(data);

  });

  useEffect(() => {
    if(isAuthenticated) navigate('/documents');
  }, [isAuthenticated]);

  return (
    <div className=" flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-green-800 max-w-md w-full p-10 rounded-md">
      {
      signinErrors.map((error, i) => (
        <div className="bg-red-500 p-2 text-white" key={i}>
          {error}
          </div>
      ))}

        <h1 className="text-2xl font-serif">Login</h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            {...register("username", { required: true })}
            className="w-full bg-blue-700 text-amber-700 px-4 py-3 rounded-md my-2"
            placeholder="Username"
          />
          {errors.username && (
            <p className="text-red-500">Username is required </p>
          )}

          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-blue-700 text-amber-700 px-4 py-3 rounded-md my-2"
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-500">Password is required </p>
          )}
          <button type="submit">Entrar</button>
        </form>

        <p className="flex gap-x-1 justify-center">
            crea un nuevo usuario <Link to="/register" className="text-sky-500">SignUp</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
