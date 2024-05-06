import React from 'react';
import SideInfo from "../SideInfo/SideInfo";
import styles from './TabsContent.module.scss';
import ForecastBlock from "../ForecastBlock/ForecastBlock";
import {HourlyForecastResponse} from "../../types/HourlyForecast";

type Props = {
  data: HourlyForecastResponse;
};

const TabsContent:React.FC<Props> = ({ data, }) => {
    return (
        <div className={styles.container}>
            <SideInfo cityData={data.city} />
            <ForecastBlock  forecastData={data.list}/>
        </div>
    )
};

export default TabsContent;