import {
    Menu,
    MenuButton,
    HStack,
    MenuList,
    MenuItem,
    MenuDivider,
    useToast,
} from "@chakra-ui/react";
import HeaderAvatar from "./headerAvatar";
import { handleSignOut } from "../../services/account/signOut";
import { toastError, toastSuccess } from "../../helpers/configToast";
import { useCookies } from "react-cookie";
import {
    COOKIE_ACCESS_TOKEN,
    COOKIE_REFRESH_TOKEN,
    COOKIE_USER_DATA,
} from "../../helpers/constants";
import { useNavigate } from "react-router-dom";
import { routesPages } from "../../helpers/routesPages";

type MenuHeaderProps = {
    linkImg?: string;
    roleName?: string;
    fullname?: string;
};

export default function MenuHeader(data: MenuHeaderProps) {
    const navigate = useNavigate();
    const toast = useToast();
    const [cookies, setCookie, removeCookie] = useCookies([
        COOKIE_ACCESS_TOKEN,
        COOKIE_REFRESH_TOKEN,
        COOKIE_USER_DATA,
    ]);

    const handleLogout = () => {
        const result = handleSignOut({ removeCookie });
        if (!result) {
            toast(toastError("Não foi possível proceder o logout"));
        }
        toast(toastSuccess("Você foi deslogado"));
    };

    return (
        <Menu>
            <MenuButton
                py={2}
                transition="all 0.3s"
                _focus={{ boxShadow: "none" }}
            >
                <HStack>
                    <HeaderAvatar {...data} />
                </HStack>
            </MenuButton>
            <MenuList bg={"white"} borderColor={"gray.200"}>
                <MenuItem onClick={() => navigate(routesPages.resetPasswordSignIn)}>Editar senha</MenuItem>
                <MenuDivider />
                <MenuItem onClick={handleLogout}>Sair</MenuItem>
            </MenuList>
        </Menu>
    );
}
