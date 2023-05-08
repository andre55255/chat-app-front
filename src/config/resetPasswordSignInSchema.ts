import * as yup from "yup";

export const resetPasswordSignInSchema = yup.object({
    newPassword: yup.string()
        .required("Senha não informado")
        .min(6, "Senha deve ter pelo menos 6 caracteres")
        .max(64, "Senha pode ter no máximo 64 caracteres"),
    oldPassword: yup.string()
        .required("Senha não informado")
        .min(6, "Senha deve ter pelo menos 6 caracteres")
        .max(64, "Senha pode ter no máximo 64 caracteres")
});