import {
    COOKIE_ACCESS_TOKEN,
    COOKIE_REFRESH_TOKEN,
    COOKIE_USER_DATA,
} from "../../helpers/constants";
import { endpointsApi } from "../../helpers/endpoints";
import { LoginFormType, LoginResponseType } from "../../types/form/login";
import { APIResponse, requestClient } from "../api/requestClient";

type handleLoginProps = {
    data: LoginFormType;
    setCookie: Function;
};

export const handleLogin = async ({
    data,
    setCookie,
}: handleLoginProps): Promise<APIResponse<LoginResponseType>> => {
    try {
        const resultRequest = await requestClient<LoginResponseType>({
            url: endpointsApi.account.login,
            method: "POST",
            data,
        });
        if (!resultRequest.success) {
            return resultRequest;
        }
        if (resultRequest.success) {
            setCookie(COOKIE_ACCESS_TOKEN, resultRequest.object?.accessToken);
            setCookie(COOKIE_REFRESH_TOKEN, resultRequest.object?.refreshToken);
            setCookie(COOKIE_USER_DATA, resultRequest.object?.user);
            return resultRequest;
        }

        return {
            success: false,
            message: "Ops, falha ao tratar dados de acesso",
        };
    } catch (err) {
        return {
            success: false,
            message:
                "Ops, falha ao executar rotina de requisição de login. Desculpe-nos pelo transtorno",
        };
    }
};
