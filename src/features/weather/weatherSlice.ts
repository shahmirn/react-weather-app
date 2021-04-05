import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppThunk, RootState } from "../../app/store";
import { AccuweatherCurrentCondition } from "../../models/accuweather-current-condition.model";
import { AccuweatherForecast } from "../../models/accuweather-forecast.model";

import accuWeatherService from '../../services/accuweather.service';

interface WeatherState {
    currentTemperatureLoading: boolean;
    currentTemperature: string;
    todaysForecastLoading: boolean;
    todaysForecast: {
        high: string;
        low: string;
    }
}

const initialState: WeatherState = {
    currentTemperatureLoading: false,
    currentTemperature: '',
    todaysForecastLoading: false,
    todaysForecast: {
        high: '',
        low: ''
    }
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setCurrentTemperatureLoading: state => {
            state.currentTemperatureLoading = true;
        },
        setCurrentTemperature: (state, action: PayloadAction<AccuweatherCurrentCondition[]>) => {
            state.currentTemperature = `${action.payload[0].Temperature.Imperial.Value} F`;
            state.currentTemperatureLoading = false;
        },
        setTodaysForecastLoading: state => {
            state.todaysForecastLoading = true;
        },
        setTodaysForecast: (state, action: PayloadAction<AccuweatherForecast>) => {
            state.todaysForecast = {
                high: `${action.payload.DailyForecasts[0].Temperature.Maximum.Value} F`,
                low: `${action.payload.DailyForecasts[0].Temperature.Minimum.Value} F`
            }
            state.todaysForecastLoading = false;
        },
    }
});

export const { setCurrentTemperatureLoading, setCurrentTemperature, setTodaysForecastLoading, setTodaysForecast } = weatherSlice.actions;

export const fetchCurrentConditions = (locationKey: string): AppThunk => dispatch => {
    dispatch(setCurrentTemperatureLoading());

    accuWeatherService.getCurrentConditions(locationKey, response => {
        dispatch(setCurrentTemperature(response));
    });
};

export const fetch1DayForecast = (locationKey: string): AppThunk => dispatch => {
    dispatch(setTodaysForecastLoading());

    accuWeatherService.get1DayForecast(locationKey, response => {
        dispatch(setTodaysForecast(response));
    });
};

export const getCurrentTemperature = (state: RootState) => state.weather.currentTemperature;
export const getTodaysForecast = (state: RootState) => state.weather.todaysForecast;

export default weatherSlice.reducer;