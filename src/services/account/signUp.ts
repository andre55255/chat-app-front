import { endpointsApi } from "../../helpers/endpoints";
import { SignUpFormType } from "../../types/form/signUp";
import { APIResponse, requestClient } from "../api/requestClient";

export const handleSignUp = async (
    data: SignUpFormType
): Promise<APIResponse<any>> => {
    try {
        const result = await requestClient({
            url: endpointsApi.account.signUpUser,
            method: "POST",
            data
        });

        return result;
    } catch (err) {
        return {
            success: false,
            message:
                "Ops, falha ao executar rotina de requisição de inserir usuário. Desculpe-nos pelo transtorno",
        };
    }
};
