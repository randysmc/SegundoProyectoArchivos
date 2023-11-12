import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function RegisterPage() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  
  const navigate = useNavigate();


    useEffect(() => {
    if (isAuthenticated) navigate("/register");
  }),
    [isAuthenticated];


  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });
 

  return (

    <div className="bg-gray-800 max-w-md p-10 rounded-md">
      {
      registerErrors.map((error, i) => (
        <div className="bg-red-500 p-2 text-white" key={i}>
          {error}
          </div>
      ))}

      <form onSubmit={onSubmit}>
        <input
          type="text"
          {...register("username", { required: true })}
          className="w-full bg-gray-500 text-white px-4 py-3 rounded-md my-2"
          placeholder="Username"
        />

        {errors.username && (
          <p className="text-red-500"> Username is required</p>
        )}

        <input
          /*type="password" */
          type= {showPassword ? 'text': 'password'}
          {...register("password", { required: true })}
          className="w-full bg-gray-500 text-white px-4 py-3 rounded-md my-3"
          placeholder="Password"
        />
        <button type="button"
        onClick={() => setShowPassword(!showPassword)} className="text-white">
          {showPassword ? 'Hide' : 'Show'} Password
        </button>
        {errors.password && (
          <p className="text-red-500"> Password is required</p>
        )}
        <select
        id="roles"
        {...register('roles')}
        onChange={(e) => setValue('roles', e.target.value, true)}
        className="w-full bg-gray-500 text-white px-4 py-3 rounded-md my-3"
        >
          <option value="empleado">Empleado</option>
        </select>
        <button type="submit">Register</button>


      </form>

    </div>
  );
}

export default RegisterPage;



/**      <p className="flex gap-x-1 justify-center">
            Ya tienes una cuenta <Link to="/login" className="text-sky-500">Signin</Link>
        </p> */