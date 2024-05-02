import { useLoadScript } from '@react-google-maps/api';
import React from "react";
import Map from '../Map/Map';

const apiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY || '';

 const Places = () => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: apiKey,
        libraries: ["places"],
    });

    if(!isLoaded) return <div>Loading...</div>;
    return <Map />
};

export default Places;