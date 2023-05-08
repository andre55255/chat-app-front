import {
    BoxProps,
    useColorModeValue,
    Box,
    Flex,
    Text,
    CloseButton,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import { FiHome } from "react-icons/fi";
import NavItem from "./navItem";
import Logo from "./Logo";
import { backgroundColors } from "../../helpers/colors";
import { routesPages } from "../../helpers/routesPages";
import { useNavigate } from "react-router-dom";

interface LinkItemProps {
    name: string;
    icon: IconType;
    link: string;
}

const linkItems: Array<LinkItemProps> = [
    { name: "Home", icon: FiHome, link: routesPages.home },
];

interface SidebarProps extends BoxProps {
    onClose: () => void;
}

export default function SidebarContent({ onClose, ...rest }: SidebarProps) {
    const navigate = useNavigate();

    return (
        <Box
            transition="3s ease"
            bg={backgroundColors.homeSideMenu}
            borderRight="1px"
            borderRightColor={"white"}
            w={{ base: "full", md: 60 }}
            pos="fixed"
            h="full"
            {...rest}
        >
            <Flex
                h="20"
                alignItems="center"
                mx="8"
                justifyContent="space-between"
            >
                <Logo isMobile={false} />
                <CloseButton
                    display={{ base: "flex", md: "none" }}
                    color={"white"}
                    onClick={onClose}
                />
            </Flex>
            {linkItems.map((link) => (
                <NavItem link={link.link} color={"white"} key={link.name} icon={link.icon}>
                    {link.name}
                </NavItem>
            ))}
        </Box>
    );
}
