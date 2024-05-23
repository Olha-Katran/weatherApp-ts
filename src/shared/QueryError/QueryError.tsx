import React from 'react';
import { FaTimesCircle } from 'react-icons/fa';
import {FetchBaseQueryError} from "@reduxjs/toolkit/query/react";
import {SerializedError} from "@reduxjs/toolkit";
import styles from './QueryError.module.scss';

type Props = {
    error: FetchBaseQueryError | SerializedError;
};

const QueryError: React.FC<Props> = ({error}) => {
    let errMsg;
    if ('status' in error) {
        errMsg = 'error' in error ? error.error : JSON.stringify(error.data);
    } else {
        errMsg = error.message;
    }
    return (
        <div className={styles.alert}>
            <div className={styles.icon}>
                <FaTimesCircle />
            </div>
            <strong>Error!</strong>
            {errMsg}
        </div>
    )
};

export default QueryError;