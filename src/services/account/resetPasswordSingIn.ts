import { endpointsApi } from "../../helpers/endpoints";
import { ResetPasswordSignInFormType } from "../../types/form/resetPasswordSignIn";
import { APIResponse, requestClient } from "../api/requestClient";

export const handleResetPasswordSignIn = async (
    data: ResetPasswordSignInFormType,
    accessToken: string
): Promise<APIResponse<any>> => {
    try {
        const result = await requestClient({
            url: endpointsApi.account.resetPasswordSignIn,
            method: "POST",
            authorization: accessToken,
            data
        });

        return result;
    } catch (err) {
        return {
            success: false,
            message:
                "Ops, falha ao executar rotina de requisição de editar senha logado. Desculpe-nos pelo transtorno",
        };
    }
};
