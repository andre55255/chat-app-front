import CustomInputPassword from "../form/inputPassword";
import TemplateForm from "../form/template";
import {
    Button,
    Divider
} from "@chakra-ui/react";
import CustomLinks from "../typograph/linksCustom";
import { ResetPasswordSignInFormType } from "../../types/form/resetPasswordSignIn";
import { FormikHelpers, useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { resetPasswordSignInSchema } from "../../config/resetPasswordSignInSchema";
import { routesPages } from "../../helpers/routesPages";

type ResetPasswordSignInFormProps = {
    isFetching: boolean;
    handleSubmit: (
        values: ResetPasswordSignInFormType,
        formikHelpers: FormikHelpers<ResetPasswordSignInFormType>
    ) => void | Promise<any>;
};

export default function ResetPasswordSignInForm({
    isFetching,
    handleSubmit,
}: ResetPasswordSignInFormProps) {
    const navigate = useNavigate();

    const initialValues: ResetPasswordSignInFormType = {
        newPassword: "",
        oldPassword: ""
    };

    const formik = useFormik<ResetPasswordSignInFormType>({
        initialValues,
        onSubmit: handleSubmit,
        validationSchema: resetPasswordSignInSchema,
    });

    return (
        <TemplateForm autoComplete="off" handleSubmit={formik.handleSubmit}>
            <CustomInputPassword
                isInvalid={formik.touched.oldPassword && formik.errors.oldPassword}
                label="Senha antiga"
                name="oldPassword"
                variant="flushed"
                errorMessage={formik.errors.oldPassword}
                value={formik.values.oldPassword}
                onChange={formik.handleChange}
            />
            <CustomInputPassword
                isInvalid={formik.touched.newPassword && formik.errors.newPassword}
                label="Senha nova"
                name="newPassword"
                variant="flushed"
                errorMessage={formik.errors.newPassword}
                value={formik.values.newPassword}
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
                label="Voltar para home"
                handleClick={() => navigate(routesPages.home)}
            />
        </TemplateForm>
    );
}