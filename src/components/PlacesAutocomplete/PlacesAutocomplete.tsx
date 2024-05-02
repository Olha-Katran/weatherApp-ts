import React from "react";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption
} from '@reach/combobox';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import {useAppDispatch} from "../../redux/hooks";
import { setSelectedCity } from "../../redux/search/search";
import {Coord} from "../../types/CityData";
import styles from './PlacesAutocomplete.module.scss';

type Props = {
    setSelected: (location: Coord) => void;
}

const PlacesAutocomplete:React.FC<Props> = ({setSelected}) => {
    const dispatch = useAppDispatch();

    const {
        ready,
        value,
        suggestions: {status, data },
        setValue,
        clearSuggestions
    } = usePlacesAutocomplete({
        requestOptions: {
            types: ['(cities)']
        }
    });

    const handleSelect = async (address: string) => {
        setValue(address, false);
        clearSuggestions();

        try {
            const results = await getGeocode({ address });
            const { lat, lng: lon } = await getLatLng(results[0]);
            setSelected({lat, lon});
            dispatch(setSelectedCity({coord: {lat, lon}, city: address}));
        } catch (error) {
            console.error('Error selecting place:', error);
        }
    };

    return (
        <Combobox
            onSelect={handleSelect}
            className={styles.combobox}
        >
            <ComboboxInput
                value={value}
                onChange={(e) => setValue(e.target.value)}
                disabled={!ready}
                className={styles.combobox_input}
                placeholder='Enter a town'
            />
            <ComboboxPopover className={styles.popover}>
                <ComboboxList className={styles.combobox_list}>
                    {status === 'OK' &&
                        data.map(({place_id, description}) => (
                            <ComboboxOption
                                key={place_id}
                                value={description}
                                className={styles.combobox_option}
                            />
                        ))
                    }
                </ComboboxList>
            </ComboboxPopover>
        </Combobox>
    )
};

export default PlacesAutocomplete;