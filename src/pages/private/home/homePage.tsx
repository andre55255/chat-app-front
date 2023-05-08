import { Container, Stack, Heading, Text, Button, Box } from "@chakra-ui/react";

export default function HomePage() {
    return (
        <>
            <Container maxW={"3xl"}>
                <Stack
                    as={Box}
                    textAlign={"center"}
                    spacing={{ base: 8, md: 14 }}
                >
                    <Heading
                        fontWeight={600}
                        fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
                        lineHeight={"110%"}
                    >
                        Bem vindo, <br />
                        <Text as={"span"} color={"green.400"}>
                            Ao Serviço de Chat
                        </Text>
                    </Heading>
                    <Text color={"gray.500"}>
                        Um serviço de chat baseado na biblioteca SignalR Backend
                        feito em C# Asp Net 6.0 Web Api e para front-end foi
                        utilizada a biblioteca de components ChakraUI
                    </Text>
                    <Stack
                        direction={"column"}
                        spacing={3}
                        align={"center"}
                        alignSelf={"center"}
                        position={"relative"}
                    >
                        <Button
                            colorScheme={"green"}
                            bg={"green.400"}
                            rounded={"full"}
                            px={6}
                            _hover={{
                                bg: "green.500",
                            }}
                        >
                            Ir para Chat
                        </Button>
                    </Stack>
                </Stack>
            </Container>
        </>
    );
}
