import React from 'react';
import styles from './CurrentLocation.module.scss';
import {countryCodeToFullName} from "../../shared/FormatCountry/FormatCountry";

type Props = {
    location: string;
    country: string;
}

const CurrentLocation:React.FC<Props> = ({ location, country }) => {
    const date = new Date();
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayOfWeek = daysOfWeek[date.getDay()];
    const dayOfMonth = date.getDate();
    const month = date.toLocaleString('en-GB', { month: 'short' });

    const formattedDate = `${dayOfWeek}, ${month} ${dayOfMonth}`;

    return (
        <div className={styles.location}>
            <h1>
                {location},
                <br />
                {countryCodeToFullName(country)}
            </h1>
            <p>
                {formattedDate}
            </p>
        </div>
    )
};

export default CurrentLocation;