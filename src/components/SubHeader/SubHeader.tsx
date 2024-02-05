import React from 'react';
import styles from './SubHeader.module.scss';

const SubHeader = () => (
    <div className={styles.header_days}>
        <ul>
            <li>Сьогодні</li>
            <li>Місяць</li>
            <li>Завтра</li>
            <li>вихідні</li>
            <li>3 дні</li>
            <li>5 днів</li>
            <li>Тиждень</li>
            <li>10 днів</li>
            <li>Погодинний</li>
            <li>Архів</li>
        </ul>
    </div>
);

export default SubHeader;
