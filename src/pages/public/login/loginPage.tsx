import { useState } from "react";
import { Box, Heading, useToast } from "@chakra-ui/react";
import { LoginFormType } from "../../../types/form/login";
import LoginForm from "../../../components/screenForms/LoginForm";
import { handleLogin } from "../../../services/account/login";
import { toastError, toastSuccess } from "../../../helpers/configToast";
import { useCookies } from "react-cookie";
import {
    COOKIE_ACCESS_TOKEN,
    COOKIE_REFRESH_TOKEN,
    COOKIE_USER_DATA,
} from "../../../helpers/constants";

export default function LoginPage() {
    const [cookies, setCookie, removeCookie] = useCookies([
        COOKIE_ACCESS_TOKEN,
        COOKIE_REFRESH_TOKEN,
        COOKIE_USER_DATA,
    ]);
    const toast = useToast();
    const [isFetching, setIsFetching] = useState(false);

    const handleSubmit = async (data: LoginFormType) => {
        setIsFetching(true);
        const result = await handleLogin({ data, setCookie });
        setIsFetching(false);
        if (!result.success) {
            toast(toastError(result.message));
            return;
        }
        toast(toastSuccess(result.message));
    };

    return (
        <Box bg="white" p={6} rounded="md" w={300}>
            <Heading
                textAlign="center"
                size="lg"
                fontSize="xl"
                fontWeight="bold"
            >
                Faça seu login
            </Heading>
            <LoginForm handleSubmit={handleSubmit} isFetching={isFetching} />
        </Box>
    );
}
