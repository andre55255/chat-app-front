import * as yup from "yup";

export const loginSchema = yup.object({
    username: yup.string().required("Informe seu nome de usuário"),
    password: yup.string().required("Informe sua senha")
});