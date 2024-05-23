import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import PATH from "./routes";
import Root from "../pages/Root";
import CurrentWeather from "../pages/currentWeather/currentWeather";
import Forecast from "../pages/Forecast/Forecast";

const BrowserRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path={PATH.ROOT} element={<Root />}>
            <Route path={PATH.CURRENT_WEATHER}>
                <Route index element={<CurrentWeather />} />
                <Route path={PATH.FORECAST} element={<Forecast />} />
            </Route>
        </Route>
    )
);

export default BrowserRouter;