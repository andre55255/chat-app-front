import * as yup from "yup";

export const forgotPasswordSchema = yup.object({
    userName: yup.string().required("Informe seu nome de usuário")
});