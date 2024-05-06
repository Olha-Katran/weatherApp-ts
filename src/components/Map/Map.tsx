import React, { useState } from 'react';
import styles from "../Places/Places.module.scss";
import PlacesAutocomplete from "../PlacesAutocomplete/PlacesAutocomplete";
import {Coord} from "../../types/CityData";


const Map = () => {
    const [selected, setSelected] = useState<Coord | null>(null);
    return (
        <>
            <div className={styles.places_container}>
                <PlacesAutocomplete setSelected={setSelected} />
            </div>
        </>
    )
};

export default Map;