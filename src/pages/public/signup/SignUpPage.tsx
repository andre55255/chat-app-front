import { Box, Heading, useToast } from "@chakra-ui/react";
import SignUpForm from "../../../components/screenForms/SignUpForm";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { SignUpFormType } from "../../../types/form/signUp";
import { handleSignUp } from "../../../services/account/signUp";
import { toastError, toastSuccess } from "../../../helpers/configToast";
import { routesPages } from "../../../helpers/routesPages";

export default function SignUpPage() {
    const toast = useToast();
    const navigate = useNavigate();
    const [isFetching, setIsFetching] = useState(false);

    const handleSubmit = async (data: SignUpFormType) => {
        setIsFetching(true);
        const result = await handleSignUp(data);
        setIsFetching(false);
        if (!result.success) {
            toast(toastError(result.message));
            return;
        }
        toast(toastSuccess(result.message));
        navigate(routesPages.login);
    }

    return (
        <Box bg="white" marginY={10} p={6} rounded="md" w="80vw">
            <Heading
                textAlign="center"
                size="lg"
                fontSize="xl"
                fontWeight="bold"
            >
                Inscreva-se
            </Heading>
            <SignUpForm 
                isFetching={isFetching}
                handleSubmit={handleSubmit}
            />
        </Box>
    );
}