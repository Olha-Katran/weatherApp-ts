import React from 'react';
import {useNavigate} from "react-router-dom";
import { ReactComponent as ArrowLeftIcon } from '../../assets/header/arrow-to-left-icon.svg';
import styles from './ReturnButton.module.scss';

type Props = {
    name: string;
};

const ReturnButton: React.FC<Props> = ({name}) => {
    const navigate = useNavigate();
    const clickHandler = () => navigate('..', {relative: 'route'});
    return (
        <div className={styles.page_header}>
            <button
                type='button'
                className={styles.go_back}
                onClick={clickHandler}
            >
                <ArrowLeftIcon />
            </button>
            <h3 className={styles.page_name}>{name}</h3>
        </div>

    )
};

export default ReturnButton;