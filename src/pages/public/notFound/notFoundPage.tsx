import { Container, Flex, Box, Heading, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { routesPages } from "../../../helpers/routesPages";
import { backgroundColors } from "../../../helpers/colors";

export default function NotFoundPage() {
    const navigate = useNavigate();

    return (
        <Container centerContent>
            <Flex
                bg={backgroundColors.layoutPublic}
                align="center"
                justify="center"
                minH="100vh"
                w="100vw"
            >
                <Box textAlign="center" py={10} px={6}>
                    <Heading
                        display="inline-block"
                        as="h2"
                        size="2xl"
                        bgGradient="linear(to-r, #fcfcfc, #eceaea)"
                        backgroundClip="text"
                    >
                        404
                    </Heading>
                    <Text color="white" fontSize="18px" mt={3} mb={2}>
                        Página não encontrada
                    </Text>
                    <Text color="white" mb={6}>
                        A página que você está tentando acessar não existe
                    </Text>

                    <Button onClick={() => navigate(routesPages.home)}>
                        Voltar para a página principal
                    </Button>
                </Box>
            </Flex>
        </Container>
    );
}
