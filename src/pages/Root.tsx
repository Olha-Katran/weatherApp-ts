import {Navigate, Outlet, useLocation} from "react-router-dom";
import BROWSER_ROUTES from "../router/routes";

const Root = () => {
    const { pathname } = useLocation();

    if (pathname === '/') {
        return (
            <Navigate
                to={`${BROWSER_ROUTES.CURRENT_WEATHER}`}
                replace
            />
        )
    }

    return (
        <>
            <Outlet />
        </>
    )
};

export default Root;