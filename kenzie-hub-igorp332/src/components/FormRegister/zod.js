import { z } from "zod";

export const formRegisterZod = z.object({
    name: z.string().min(3, "O nome é obrigatório e precisa de pelo menos 5 caracteres."),
    email: z.string().min(1, "O e-mail é obrigatório").email("Forneça um e-mail válido."),
    password: z.string().min(8, "A senha precisa conter pelo menos 8 caracteres.")
    .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula.")
    .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula.")
    .regex(/(?=.*?[0-9])/, "É necessário pelo menos uma número.")
    .regex(/(?=.*?[!,@,#,$,%,¨,&,*,_,?])/, "É necessário ter um símbolo."),
    passwordagain: z.string().min(1, "É obrigatório confirmar a senha."),
    bio: z.string().min(1, "Este campo é obrigatório."),
    contact: z.string().min(1, "Este campo é obrigatório."),
    course_module: z.string().min(1, "Este campo é obrigatório.")
}).refine(({password, passwordagain}) => passwordagain === password, {
    message: "As duas senhas devem corresponder",
    path: ["passwordagain"],
})