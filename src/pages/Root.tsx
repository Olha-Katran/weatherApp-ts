import {Navigate, Outlet, useLocation} from "react-router-dom";
import AppNavigation from "../components/AppNavigation/AppNavigation";
import BROWSER_ROUTES from "../router/routes";

const Root = () => {
    const { pathname } = useLocation();

    if (pathname === '/') {
        return (
            <Navigate
                to={BROWSER_ROUTES.MAIN}
                replace
            />
        )
    }

    return (
        <>
            <Outlet />
            <AppNavigation />
        </>
    )
};

export default Root;