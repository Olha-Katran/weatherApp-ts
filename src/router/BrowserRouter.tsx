import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import PATH from "./routes";
import Root from "../pages/Root";
import Main from "../pages/main/Main";

const BrowserRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path={PATH.ROOT} element={<Root />}>
            <Route path={PATH.MAIN} element={<Main />} />
        </Route>
    )
);

export default BrowserRouter;