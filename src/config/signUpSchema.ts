import * as yup from "yup";

export const signUpSchema = yup.object({
    firstName: yup.string()
        .required("Primeiro nome não informado")
        .max(125, "Primeiro nome pode ter no máximo 125 caracteres"),
    lastName: yup.string()
        .required("Sobrenome não informado")
        .max(125, "Sobrenome pode ter no máximo 125 caracteres"),
    email: yup.string()
        .required("Email não informado")
        .email("Email inválido"),
    username: yup.string()
        .required("Nome de usuário não informado")
        .max(128, "Nome de usuário pode ter no máximo 128 caracteres"),
    password: yup.string()
        .required("Senha não informado")
        .min(6, "Senha deve ter pelo menos 6 caracteres")
        .max(64, "Senha pode ter no máximo 64 caracteres"),
});