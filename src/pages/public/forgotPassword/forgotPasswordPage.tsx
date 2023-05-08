import { useState } from "react";
import { Box, Heading, useToast } from "@chakra-ui/react";
import ForgotPasswordForm from "../../../components/screenForms/ForgotPasswordForm";
import { ForgotPasswordFormType } from "../../../types/form/forgotPassword";
import { handleForgotPassword } from "../../../services/account/forgotPassword";
import { toastError, toastSuccess } from "../../../helpers/configToast";
import { useNavigate } from "react-router-dom";
import { routesPages } from "../../../helpers/routesPages";

export default function ForgotPasswordPage() {
    const toast = useToast();
    const navigate = useNavigate();
    const [isFetching, setIsFetching] = useState(false);

    const handleSubmit = async (data: ForgotPasswordFormType) => {
        setIsFetching(true);
        const result = await handleForgotPassword(data);
        setIsFetching(false);
        if (!result.success) {
            toast(toastError(result.message));
            return;
        }
        toast(toastSuccess(result.message));
        navigate(routesPages.login);
    }

    return (
        <Box bg="white" p={6} rounded="md" w={300}>
            <Heading
                textAlign="center"
                size="lg"
                fontSize="xl"
                fontWeight="bold"
            >
                Recupere sua senha
            </Heading>
            <ForgotPasswordForm 
                handleSubmit={handleSubmit}
                isFetching={isFetching}
            />
        </Box>
    );
}