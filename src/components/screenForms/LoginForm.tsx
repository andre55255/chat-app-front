import { Button, Divider } from "@chakra-ui/react";
import TemplateForm from "../form/template";
import CustomInputText from "../form/inputText";
import CustomInputPassword from "../form/inputPassword";
import CustomLinks from "../typograph/linksCustom";
import { FormikHelpers, useFormik } from "formik";
import { LoginFormType } from "../../types/form/login";
import { loginSchema } from "../../config/loginSchema";
import { useNavigate } from "react-router-dom";
import { routesPages } from "../../helpers/routesPages";

type LoginFormProps = {
    isFetching: boolean;
    handleSubmit: (
        values: LoginFormType,
        formikHelpers: FormikHelpers<LoginFormType>
    ) => void | Promise<any>;
};

export default function LoginForm({
    isFetching,
    handleSubmit,
}: LoginFormProps) {
    const navigate = useNavigate();

    const initialValues: LoginFormType = {
        username: "",
        password: "",
    };

    const formik = useFormik<LoginFormType>({
        initialValues,
        onSubmit: handleSubmit,
        validationSchema: loginSchema,
    });

    return (
        <TemplateForm autoComplete="off" handleSubmit={formik.handleSubmit}>
            <CustomInputText
                isInvalid={formik.touched.username && formik.errors.username}
                label="Nome de usuário"
                name="username"
                type="text"
                variant="flushed"
                errorMessage={formik.errors.username}
                value={formik.values.username}
                onChange={formik.handleChange}
            />
            <CustomInputPassword
                isInvalid={formik.touched.password && formik.errors.password}
                label="Senha"
                name="password"
                variant="flushed"
                errorMessage={formik.errors.password}
                value={formik.values.password}
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
                label="Esqueceu sua senha?"
                handleClick={() => navigate(routesPages.forgotPassword)}
            />
            <CustomLinks
                label="Ainda não tem cadastro?"
                handleClick={() => navigate(routesPages.signup)}
            />
        </TemplateForm>
    );
}
