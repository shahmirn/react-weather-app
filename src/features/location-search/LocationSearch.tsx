import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLocationResults, fetchSearchResults, setLocationKey } from './locationSlice';

export function LocationSearch() {

    const locations = useSelector(getLocationResults);
    const dispatch = useDispatch();
    const [location, setLocationLocalState] = useState('Katy, TX');

    return (
        <div>
            <div>
                Location: <input
                aria-label="Set location"
                value={location}
                onChange={e => setLocationLocalState(e.target.value)}
                />
            </div>
            <button
                onClick={() =>
                    dispatch(fetchSearchResults(location))
                }
            >
                Get Locations
            </button>
            {locations.map(location => {
                return <div key={location.key} onClick={() => dispatch(setLocationKey(location.key))}>
                    {location.city}, {location.administrativeArea}, {location.countryID}
                </div>
            })}
        </div>
    );
}