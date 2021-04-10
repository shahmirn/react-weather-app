import React from 'react';
import { getByText, render } from '@testing-library/react';
import { Weather } from './Weather';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import weatherReducer, { WeatherState } from '../slices/weatherSlice';
import { combineReducers } from '@reduxjs/toolkit';

test('should display the weather', () => {

    const weatherState: WeatherState = {
        currentConditionsLoading: false,
        currentConditions: {
            condition: 'Really blazing hot',
            temperature: '200 K',
        },
        todaysForecastLoading: false,
        todaysForecast: {
            high: '300 K',
            low: '-100 K'
        }
    };

    const initialState = {
        weather: weatherState
    };

    const store = createStore(combineReducers({ weather: weatherReducer }), initialState);

    const { getByTestId } = render(
        <Provider store={store}>
            <Weather />
        </Provider>
    );

    const currentCondition = getByTestId(/current-condition/);
    const currentTemperature = getByTestId(/current-temperature/);
    const high = getByTestId(/high/);
    const low = getByTestId(/low/);

    expect(currentCondition).toBeInTheDocument();
    expect(currentTemperature).toBeInTheDocument();
    expect(high).toBeInTheDocument();
    expect(low).toBeInTheDocument();

    expect(getByText(currentCondition, /Really blazing hot/)).toBeTruthy();
    expect(getByText(currentTemperature, /200 K/)).toBeTruthy();
    expect(getByText(high, /300 K/)).toBeTruthy();
    expect(getByText(low, /-100 K/)).toBeTruthy();
});
