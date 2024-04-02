import React from 'react';
import SideInfo from "../SideInfo/SideInfo";
import styles from './TabsContent.module.scss';
import ForecastBlock from "../ForecastBlock/ForecastBlock";

const TabsContent = () => {
    return (
        <div className={styles.container}>
            <SideInfo />
            <ForecastBlock />
        </div>
    )
};

export default TabsContent;