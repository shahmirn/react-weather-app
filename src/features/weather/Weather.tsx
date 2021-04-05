import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getLocationKey } from '../location-search/locationSlice';
import { fetch1DayForecast, fetchCurrentConditions, getCurrentTemperature, getTodaysForecast } from './weatherSlice';
// import { getCurrentConditions, getTodaysForecast } from './weatherSlice';

export function Weather() {

    const currentTemperature = useSelector(getCurrentTemperature);
    const todaysForecast = useSelector(getTodaysForecast);
    const locationKey = useSelector(getLocationKey);

    const dispatch = useDispatch();

    return (
        <div>
            <button
                onClick={() => {
                    dispatch(fetchCurrentConditions(locationKey));
                    dispatch(fetch1DayForecast(locationKey));
                }}
            >
                Fetch Temperature
            </button>
            <div>Current Temperature: {currentTemperature}</div>
            <div>Today's High: {todaysForecast.high}</div>
            <div>Today's Low: {todaysForecast.low}</div>
        </div>
    );
}