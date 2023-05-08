import {
    COOKIE_ACCESS_TOKEN,
    COOKIE_REFRESH_TOKEN,
    COOKIE_USER_DATA,
} from "../../helpers/constants";

type handleSignOutProps = {
    removeCookie: Function;
};

export const handleSignOut = ({
    removeCookie,
}: handleSignOutProps): boolean => {
    try {
        removeCookie(COOKIE_ACCESS_TOKEN);
        removeCookie(COOKIE_REFRESH_TOKEN);
        removeCookie(COOKIE_USER_DATA);
        return true;
    } catch (err) {
        return false;
    }
};
