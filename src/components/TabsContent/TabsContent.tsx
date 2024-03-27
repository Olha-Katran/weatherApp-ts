import React from 'react';
import SideInfo from "../SideInfo/SideInfo";
import styles from './TabsContent.module.scss';

const TabsContent = () => {
    return (
        <div className={styles.container}>
            <SideInfo />
        </div>
    )
};

export default TabsContent;