import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { routesPages } from "../helpers/routesPages";
import PrivateLayout from "../pages/layout/privateLayout";

export const ProtectedRoute = () => {
    const { accessToken } = useAuth();
    if (!accessToken) {
        return <Navigate to={routesPages.login} />;
    }
    return (
        <PrivateLayout>
            <Outlet />
        </PrivateLayout>
    );
};
