import { Container, Flex, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { backgroundColors } from "../../helpers/colors";

type AuxProps = {
    children: JSX.Element | JSX.Element[];
}

export default function PublicLayout({ children }: AuxProps) {
    return (
        <Container centerContent>
            <Flex bg={backgroundColors.layoutPublic} align="center" justify="center" minH="100vh" w="100vw">
                {children}
            </Flex>
        </Container>
    );
}
