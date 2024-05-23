import React from 'react';
import styles from './Loading.module.scss';

type Props = {
    blockScreen?: boolean;
};

const spinnerElements = Array.from(Array(8).keys()).map(el => (
    <div key={`dot-${el}`}>
        <div />
    </div>
));

const Loading: React.FC<Props> = ({ blockScreen = false }) => (
    <div className={blockScreen ? styles.blockScreen : ''}>
        <div className={styles.spinner}>
            <div className={styles.spinner_body}>{spinnerElements}</div>
        </div>
    </div>
);

export default Loading;
