import {
    Flex,
    FlexProps,
    IconButton,
    HStack,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import Logo from "./Logo";
import MenuHeader from "./menuHeader";
import { backgroundColors } from "../../helpers/colors";

interface MobileProps extends FlexProps {
    linkImg?: string;
    roleName?: string;
    fullname?: string;
    onOpen: () => void;
}

export default function MobileNav({ onOpen, ...rest }: MobileProps) {
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 4 }}
            height="20"
            alignItems="center"
            bg={backgroundColors.homeTop}
            borderBottomWidth="1px"
            borderBottomColor={"white"}
            justifyContent={{ base: "space-between", md: "flex-end" }}
            {...rest}
        >
            <IconButton
                display={{ base: "flex", md: "none" }}
                onClick={onOpen}
                variant="outline"
                aria-label="Abrir menu"
                icon={<FiMenu />}
            />
            <Logo isMobile={true} />
            <HStack spacing={{ base: "0", md: "6" }}>
                <Flex alignItems={"center"}>
                    <MenuHeader {...rest} />
                </Flex>
            </HStack>
        </Flex>
    );
}
