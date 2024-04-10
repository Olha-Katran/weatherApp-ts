import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import styles from './CurrentLocation.module.scss';

type Props = {
    location: string;
    country: string;
}

const CurrentLocation:React.FC<Props> = ({ location, country }) => {
    return (
        <div className={styles.location}>
            <FaLocationDot />
            <p>{location}, {country}</p>
        </div>
    )
};

export default CurrentLocation;