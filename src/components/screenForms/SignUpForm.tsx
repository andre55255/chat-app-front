import { useNavigate } from "react-router-dom";
import { SignUpFormType } from "../../types/form/signUp";
import CustomInputPassword from "../form/inputPassword";
import CustomInputText from "../form/inputText";
import TemplateForm from "../form/template";
import { Button, Divider, Stack, HStack, Box } from "@chakra-ui/react";
import { FormikHelpers, useFormik } from "formik";
import { signUpSchema } from "../../config/signUpSchema";
import CustomLinks from "../typograph/linksCustom";
import { routesPages } from "../../helpers/routesPages";

type SignUpFormProps = {
    isFetching: boolean;
    handleSubmit: (
        values: SignUpFormType,
        formikHelpers: FormikHelpers<SignUpFormType>
    ) => void | Promise<any>;
};

export default function SignUpForm({
    isFetching,
    handleSubmit,
}: SignUpFormProps) {
    const navigate = useNavigate();

    const initialValues: SignUpFormType = {
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
    };

    const formik = useFormik<SignUpFormType>({
        initialValues,
        onSubmit: handleSubmit,
        validationSchema: signUpSchema,
    });

    return (
        <TemplateForm autoComplete="off" handleSubmit={formik.handleSubmit}>
            <Stack spacing={2} w="100%">
                <HStack>
                    <Box w="45%">
                        <CustomInputText
                            isInvalid={
                                formik.touched.firstName &&
                                formik.errors.firstName
                            }
                            label="Nome"
                            name="firstName"
                            type="text"
                            variant="flushed"
                            errorMessage={formik.errors.firstName}
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                        />
                    </Box>
                    <Box w="55%">
                        <CustomInputText
                            isInvalid={
                                formik.touched.lastName &&
                                formik.errors.lastName
                            }
                            label="Sobrenome"
                            name="lastName"
                            type="text"
                            variant="flushed"
                            errorMessage={formik.errors.lastName}
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                        />
                    </Box>
                </HStack>
                <HStack>
                    <Box w="30%">
                        <CustomInputText
                            isInvalid={
                                formik.touched.username &&
                                formik.errors.username
                            }
                            label="Nome de usuário"
                            name="username"
                            type="text"
                            variant="flushed"
                            errorMessage={formik.errors.username}
                            value={formik.values.username}
                            onChange={formik.handleChange}
                        />
                    </Box>
                    <Box w="70%">
                        <CustomInputText
                            isInvalid={
                                formik.touched.email && formik.errors.email
                            }
                            label="Email"
                            name="email"
                            type="email"
                            variant="flushed"
                            errorMessage={formik.errors.email}
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                    </Box>
                </HStack>
                <HStack>
                    <Box w="100%">
                        <CustomInputPassword
                            isInvalid={
                                formik.touched.password &&
                                formik.errors.password
                            }
                            label="Senha"
                            name="password"
                            variant="flushed"
                            errorMessage={formik.errors.password}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                    </Box>
                </HStack>
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
                    label="Voltar para o login"
                    handleClick={() => navigate(routesPages.login)}
                />
            </Stack>
        </TemplateForm>
    );
}
