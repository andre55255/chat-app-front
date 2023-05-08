export type LoginFormType = {
    username: string;
    password: string;
};

export type LoginResponseType = {
    accessToken: string | null;
    refreshToken: string | null;
    expirationAt: Date | null;
    user: LoginResponseUserType | null;
}

type LoginResponseUserType = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    attemptAccessLogin: number | null;
    lockoutDate: Date | null;
    lockoutDateEnd: Date | null;
    roles: LoginResponseUserRoleType[];
}

type LoginResponseUserRoleType = {
    id: string;
    name: string;
    normalizedName: string;
}