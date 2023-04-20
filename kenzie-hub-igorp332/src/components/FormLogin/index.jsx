import { Link, useNavigate } from "react-router-dom";
import { formLoginZod } from "./zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledForm } from "../../pages/Login/style";
import { api } from "../../services/api"; 
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const FormLogin = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formLoginZod),
  });

  const submitFormLogin = async (formData) => {
    const response = await api.post("/sessions", formData).catch(function (error) {
        if (error.response) {
          toast.error(error.response.data);
        } else if (error.request) {
          toast.error(error.request);
        } else {
          toast.error('Error', error.message);
        }
        toast.error(error.config);
      });
    if (response) {
      localStorage.setItem("@kenzieHub:TOKEN", response.data.token);
      toast.success("Usuário logado com sucesso");
      setTimeout(() => navigate(`/dashboard/${response.data.user.id}`), 2000);
    } 
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(submitFormLogin)}>
        <h1>Login</h1>
        <label>Email</label>
        <input
          type="text"
          placeholder="Digite aqui seu email"
          {...register("email")}
        />
        {errors.email ? <p>{errors.email.message}</p> : null}
        <label>Senha</label>
        <input
          type="password"
          placeholder="Digite aqui sua senha"
          {...register("password")}
        />
        {errors.password ? <p>{errors.password.message}</p> : null}
        <button type="submit" className="enterBtn">
          Entrar
        </button>
        <p>Ainda não possui uma conta?</p>
        <Link to="/register">
          <button type="button" className="registerBtn">
            Cadastre-se
          </button>
        </Link>
      </StyledForm>
    </>
  );
};
