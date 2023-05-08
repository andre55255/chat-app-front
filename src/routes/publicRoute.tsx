import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import PublicLayout from "../pages/layout/publicLayout";

export const PublicRoute = () => {
    const { accessToken } = useAuth();

    if (accessToken) {
        return <Navigate to="/" />;
    }

    return (
        <PublicLayout>
            <Outlet />
        </PublicLayout>
    );
};
