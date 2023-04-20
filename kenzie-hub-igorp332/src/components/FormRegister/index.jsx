import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { formRegisterZod } from "./zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { StyledForm } from "../../pages/Register/style"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"

export const FormRegister = () => {
    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: zodResolver(formRegisterZod)
    })
    const navigate = useNavigate()
    const {submitFormRegister} = useContext(UserContext)

    return (
        <>
            <StyledForm onSubmit={handleSubmit(submitFormRegister)}>
                <h1>Crie sua conta</h1>
                <p>Rápido e grátis, vamos nessa!</p>
                <label>Nome</label>
                <input type="text" placeholder="Digite aqui seu nome" {...register("name")}/>
                {errors.name ? <p>{errors.name.message}</p> : null}
                <label>Email</label>
                <input type="text" placeholder="Digite aqui seu email" {...register("email")}/>
                {errors.email ? <p>{errors.email.message}</p> : null}
                <label>Senha</label>
                <input type="text" placeholder="Digite aqui sua senha" {...register("password")}/>
                {errors.password ? <p>{errors.password.message}</p> : null}
                <label>Confirmar senha</label>
                <input type="text" placeholder="Digite novamente sua senha" {...register("passwordagain")}/>
                {errors.passwordagain ? <p>{errors.passwordagain.message}</p> : null}
                <label>Bio</label>
                <input type="text" placeholder="Fale sobre você" {...register("bio")}/>
                {errors.bio ? <p>{errors.bio.message}</p> : null}
                <label>Contato</label>
                <input type="text" placeholder="Opção de contato" {...register("contact")}/>
                {errors.contact ? <p>{errors.contact.message}</p> : null}
                <label>Selecionar módulo</label>
                <select id="course_module" {...register("course_module")}>
                    <option value="Primeiro módulo (Introdução ao Frontend)">Primeiro módulo (Introdução ao Frontend)</option>
                    <option value="Segundo módulo (Frontend Avançado)">Segundo módulo (Frontend Avançado)</option>
                    <option value="Terceiro módulo (Introdução ao Backend)">Terceiro módulo (Introdução ao Backend)</option>
                    <option value="Quarto módulo (Backend Avançado)">Quarto módulo (Backend Avançado)</option>
                </select>
                {errors.course_module ? <p>{errors.course_module.message}</p> : null}
                <button className="registerBtn" onClick={() => setTimeout(() => {
                    navigate("/")
                }, 2000)}>Cadastrar</button>
            </StyledForm>
        </>
    )
}