import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import PATH from "./routes";
import Root from "../pages/Root";
import Main from "../pages/main/Main";
import Today from "../pages/today/Today";
import Month from "../pages/month/Month";

const BrowserRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path={PATH.ROOT} element={<Root />}>
            <Route path={PATH.MAIN} element={<Main />}>
                <Route path={PATH.TODAY} element={<Today />} />
                <Route path={PATH.MONTH} element={<Month />} />
                <Route path={PATH.TOMORROW} element={<h1>Tomorrow</h1>} />
                <Route path={PATH.CITIES} element={<h1>Cities</h1>} />
                <Route path={PATH.WORLD} element={<h1>World</h1>} />
            </Route>
        </Route>
    )
);

export default BrowserRouter;