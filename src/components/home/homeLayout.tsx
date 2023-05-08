import { ReactNode } from "react";
import {
    useDisclosure,
    useColorModeValue,
    Box,
    Drawer,
    DrawerContent,
} from "@chakra-ui/react";
import SidebarContent from "./sideBarContent";
import MobileNav from "./mobileNav";

type SidebarWithHeaderProps = {
    children: ReactNode;
};

export default function HomeLayout({
    children,
}: SidebarWithHeaderProps) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box minH="100vh" bg="white">
            <SidebarContent
                onClose={() => onClose}
                display={{ base: "none", md: "block" }}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full"
            >
                <DrawerContent>
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>
            <MobileNav onOpen={onOpen} />
            <Box ml={{ base: 0, md: 60 }} p="4">
                {children}
            </Box>
        </Box>
    );
}
