import { Box, Heading, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { ResetPasswordSignInFormType } from "../../../types/form/resetPasswordSignIn";
import { COOKIE_ACCESS_TOKEN } from "../../../helpers/constants";
import { useCookies } from "react-cookie";
import { handleResetPasswordSignIn } from "../../../services/account/resetPasswordSingIn";
import { toastError, toastSuccess } from "../../../helpers/configToast";
import ResetPasswordSignInForm from "../../../components/screenForms/ResetPasswordSignInForm";
import { useNavigate } from "react-router-dom";
import { navigateTreatment } from "../../../helpers/navigateTreatment";
import { routesPages } from "../../../helpers/routesPages";

export default function ResetPasswordSignInPage() {
    const [cookies, setCookie, removeCookie] = useCookies([
        COOKIE_ACCESS_TOKEN,
    ]);

    const toast = useToast();
    const navigate = useNavigate();
    const [isFetching, setIsFetching] = useState(false);

    const handleSubmit = async (data: ResetPasswordSignInFormType) => {
        setIsFetching(true);
        const accessToken = cookies[COOKIE_ACCESS_TOKEN];
        const result = await handleResetPasswordSignIn(data, accessToken);
        setIsFetching(false);
        if (!result.success) {
            toast(toastError(result.message));
        } else {
            toast(toastSuccess(result.message));
            navigate(routesPages.home);
            return;
        }
        navigateTreatment({
            status: result.status,
            navigate,
            removeCookie
        });
    };

    return (
        <Box bg="white" p={6} rounded="md" w="100%">
            <Heading
                textAlign="center"
                size="lg"
                fontSize="xl"
                fontWeight="bold"
            >
                Faça seu login
            </Heading>
            <ResetPasswordSignInForm handleSubmit={handleSubmit} isFetching={isFetching} />
        </Box>
    );
}
