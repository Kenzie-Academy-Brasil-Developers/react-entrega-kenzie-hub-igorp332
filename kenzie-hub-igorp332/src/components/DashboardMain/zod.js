import { z } from "zod";

export const formTechRegisterZod = z.object({
    title: z.string().min(1, "Este campo é obrigatório."),
    status: z.string().min(1, "Este campo é obrigatório.")
})

export const formTechEditZod = z.object({
    status: z.string().min(1, "Este campo é obrigatório.")
})

