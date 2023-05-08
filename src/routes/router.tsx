import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import { PublicRoute } from "./publicRoute";
import { routesPages } from "../helpers/routesPages";
import LoginPage from "../pages/public/login/loginPage";
import { ProtectedRoute } from "./protectedRoute";
import HomePage from "../pages/private/home/homePage";
import { AuthLayout } from "./authLayout";
import ForgotPasswordPage from "../pages/public/forgotPassword/forgotPasswordPage";
import NotFoundPage from "../pages/public/notFound/notFoundPage";
import SignUpPage from "../pages/public/signup/SignUpPage";
import ResetPasswordSignInPage from "../pages/private/resetPasswordSignIn/resetPasswordSignIn";

const Router = createBrowserRouter(
    createRoutesFromElements(
        <>
            {/* Auth Layout */}
            <Route element={<AuthLayout />}>
                {/* Public routes */}
                <Route element={<PublicRoute />}>
                    <Route path={routesPages.login} element={<LoginPage />} />
                    <Route
                        path={routesPages.forgotPassword}
                        element={<ForgotPasswordPage />}
                    />
                    <Route path={routesPages.signup} element={<SignUpPage />} />
                </Route>

                {/* Protected routes */}
                <Route element={<ProtectedRoute />}>
                    <Route path={routesPages.home} element={<HomePage />} />
                    <Route
                        path={routesPages.resetPasswordSignIn}
                        element={<ResetPasswordSignInPage />}
                    />
                </Route>
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </>
    )
);

export default Router;
