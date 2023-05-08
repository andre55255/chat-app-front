import { endpointsApi } from "../../helpers/endpoints";
import { ForgotPasswordFormType } from "../../types/form/forgotPassword";
import { APIResponse, requestClient } from "../api/requestClient";

export const handleForgotPassword = async (
    data: ForgotPasswordFormType
): Promise<APIResponse<any>> => {
    try {
        const resultRequest = await requestClient<any>({
            url: endpointsApi.account.forgotPassword,
            method: "POST",
            data
        });

        return resultRequest;
    } catch (err) {
        return {
            success: false,
            message:
                "Ops, falha ao executar rotina de requisição de esqueci minha senha. Desculpe-nos pelo transtorno",
        };
    }
};
