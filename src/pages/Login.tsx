import { useForm } from "react-hook-form";
import { useMutationLogin } from "../hooks/useLoginhook";
import { useIsLogin } from "../store/useLogin";
import { useNavigate } from "react-router-dom";

export default function Login() {
  
    const { mutate } = useMutationLogin();
    const handleIsLogin = useIsLogin((state) => state.setIsLogin);
    const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutate(data, {
      onSuccess: (result) => {
        alert("Login exitoso!");
        localStorage.setItem("token",result.token);
        handleIsLogin(true);
        navigate("/countries");
      },
      onError: (error) => {
        alert("Error en el login" + error.message);
      }
    });
    reset();
  });

  return (
    <div className="container col-4 mt-5">
      <h1 className="text-center">Login</h1>
      <form>
        <div>
          <label>Email</label>
          <input
            className="form-control"
            type="email"
            {...register("email", { required: "Email es requerido" })}
          />
          {errors.email && <p>**{errors.email.message}</p>}
        </div>

        <div>
          <label>Password</label>
          <input
            className="form-control"
            type="password"
            {...register("password", { required: "Password es requerido" })}
          />
          {errors.password && <p>**{errors.password.message}</p>}
        </div>

        <div className="d-flex justify-content-center mt-3">
          <button type="submit" onClick={onSubmit} className="btn btn-primary">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}