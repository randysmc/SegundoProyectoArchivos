import { useForm } from "react-hook-form";
import { registerRequest } from "../api/auth";

function RegisterPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (values) => {
    const res = await registerRequest(values);
    console.log(res)
  })

  return (
    <div className="bg-gray-800 max-w-md p-10 rounded-md">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          {...register("username", { required: true })}
          className="w-full bg-gray-500 text-green-400 px-4 py-3 rounded-md my-2"
          placeholder="Username"
        />
        <input
          type="password"
          {...register("password", { required: true })}
          className="w-full bg-gray-500 text-green-400 px-4 py-3 rounded-md my-3"
          placeholder="Password"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
