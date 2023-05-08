import {
    Link,
    Flex,
    Icon,
    FlexProps
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { IconType } from "react-icons";

interface NavItemProps extends FlexProps {
    link: string;
    icon: IconType;
    children: ReactNode;
}

export default function NavItem({ link, icon, children, ...rest }: NavItemProps) {
    return (
        <Link
            href={link}
            style={{ textDecoration: "none" }}
            _focus={{ boxShadow: "none" }}
        >
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: "whatsapp.300",
                    color: "white",
                }}
                {...rest}
            >
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="18"
                        _groupHover={{
                            color: "white",
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Link>
    );
};