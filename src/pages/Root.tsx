import {Navigate, Outlet, useLocation} from "react-router-dom";
import BROWSER_ROUTES from "../router/routes";
import AppNavigation from "../components/AppNavigation/AppNavigation";

const Root = () => {
    const { pathname } = useLocation();

    if (pathname === '/') {
        return (
            <Navigate
                to={`${BROWSER_ROUTES.MAIN}/${BROWSER_ROUTES.TODAY}`}
                replace
            />
        )
    }

    return (
        <>
            <Outlet />
            {/*<AppNavigation />*/}
        </>
    )
};

export default Root;