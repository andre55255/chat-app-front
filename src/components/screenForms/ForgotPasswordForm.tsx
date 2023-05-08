import { forgotPasswordSchema } from "../../config/forgotSchema";
import { ForgotPasswordFormType } from "../../types/form/forgotPassword";
import CustomInputText from "../form/inputText";
import TemplateForm from "../form/template";
import { FormikHelpers, useFormik } from "formik";
import { Button, Divider } from "@chakra-ui/react";
import CustomLinks from "../typograph/linksCustom";
import { useNavigate } from "react-router-dom";
import { routesPages } from "../../helpers/routesPages";

type ForgotPasswordFormProps = {
    isFetching: boolean;
    handleSubmit: (values: ForgotPasswordFormType, formikHelpers: FormikHelpers<ForgotPasswordFormType>) => void | Promise<any>;
}

export default function ForgotPasswordForm({ isFetching, handleSubmit }: ForgotPasswordFormProps) {
    const navigate = useNavigate();

    const initialValues: ForgotPasswordFormType = {
        userName: "",
    };

    const formik = useFormik<ForgotPasswordFormType>({
        initialValues,
        onSubmit: handleSubmit,
        validationSchema: forgotPasswordSchema,
    });
    
    return (
        <TemplateForm
                autoComplete="off"
                handleSubmit={formik.handleSubmit}
            >
                <CustomInputText
                    isInvalid={
                        formik.touched.userName && formik.errors.userName
                    }
                    label="Nome de usuário"
                    name="userName"
                    type="text"
                    variant="flushed"
                    errorMessage={formik.errors.userName}
                    value={formik.values.userName}
                    onChange={formik.handleChange}
                />
                <Button
                    type="submit"
                    isLoading={isFetching}
                    loadingText="Enviando"
                    colorScheme="teal"
                    w="full"
                    height="3rem"
                >
                    Enviar
                </Button>
                <Divider />
                <CustomLinks 
                    label="Voltar para login" 
                    handleClick={() => navigate(routesPages.login)}
                />
            </TemplateForm>
    );
}