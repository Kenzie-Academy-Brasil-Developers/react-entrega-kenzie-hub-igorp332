import { useNavigate } from "react-router-dom"
import { formLoginZod } from "./zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { api } from "../../services/api.js"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StyledForm } from "../../pages/Login/style"

export const FormLogin = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: zodResolver(formLoginZod)
    })

    const submit = async (formData) => {
        const response = await api.post("/sessions", formData)
        if (response.statusText === 'OK') {
            localStorage.setItem("@kenzieHub:TOKEN", response.data.token)
            localStorage.setItem("@kenzieHub:USERID", JSON.stringify(response.data.user))
            toast.success("Usuário logado com sucesso")
            setTimeout(() => {
                navigate(`/dashboard/${response.data.user.id}`)
                }, 2000)
        } else {
            toast.error(response.statusText)
        }
    }

    const toRegister = () => {
        navigate("/register")
    }

    return (
        <>
            <StyledForm onSubmit={handleSubmit(submit)}>
                <h1>Login</h1>
                <label>Email</label>
                <input type="text" placeholder="Digite aqui seu email" {...register("email")}/>
                {errors.email ? <p>{errors.email.message}</p> : null}
                <label>Senha</label>
                <input type="password" placeholder="Digite aqui sua senha" {...register("password")}/>
                {errors.password ? <p>{errors.password.message}</p> : null}
                <button className="enterBtn">Entrar</button>
                <p>Ainda não possui uma conta?</p>
                <button className="registerBtn" onClick={() => toRegister()}>Cadastre-se</button>
            </StyledForm>
        </>
    )
}
