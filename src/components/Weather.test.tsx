import React from 'react';
import { getByText, render } from '@testing-library/react';
import { Weather } from './Weather';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import weatherReducer from '../slices/weatherSlice';
import { combineReducers } from '@reduxjs/toolkit';

test('should display the weather', () => {

    const initialState = {
        weather: {
            currentTemperatureLoading: false,
            currentTemperature: '200 K',
            todaysForecastLoading: false,
            todaysForecast: {
                high: '300 K',
                low: '-100 K'
            }
        }
    }

    const store = createStore(combineReducers({ weather: weatherReducer }), initialState);

    const { getByTestId } = render(
        <Provider store={store}>
            <Weather />
        </Provider>
    );

    const current = getByTestId(/current/);
    const high = getByTestId(/high/);
    const low = getByTestId(/low/);

    expect(current).toBeInTheDocument();

    expect(getByText(current, /200 K/)).toBeTruthy();
    expect(getByText(high, /300 K/)).toBeTruthy();
    expect(getByText(low, /-100 K/)).toBeTruthy();
});
