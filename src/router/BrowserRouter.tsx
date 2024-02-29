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
            <Route path={PATH.TODAY} element={<Main />} />
            <Route path={PATH.MONTH} element={<h1>Month</h1>} />
            <Route path={PATH.TOMORROW} element={<h1>Tomorrow</h1>} />
            <Route path={PATH.CITIES} element={<h1>Cities</h1>} />
            <Route path={PATH.WORLD} element={<h1>World</h1>} />
        </Route>
    )
);

export default BrowserRouter;