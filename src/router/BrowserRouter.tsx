import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import PATH from "./routes";
import Root from "../pages/Root";
import Today from "../pages/today/Today";
import Month from "../pages/month/Month";
import CurrentWeather from "../pages/currentWeather/currentWeather";
import Forecast from "../pages/Forecast/Forecast";

const BrowserRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path={PATH.ROOT} element={<Root />}>
            <Route path={PATH.CURRENT_WEATHER}>
                <Route index element={<CurrentWeather />} />
                <Route path={PATH.FORECAST} element={<Forecast />} />
            </Route>
            <Route path={PATH.TODAY} element={<Today />} />
            <Route path={PATH.MONTH} element={<Month />} />
        </Route>
    )
);

export default BrowserRouter;