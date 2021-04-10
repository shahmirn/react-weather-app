import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AppThunk, RootState } from "../store";
import { AccuweatherCurrentCondition } from "../models/accuweather-current-condition.model";
import { AccuweatherForecast } from "../models/accuweather-forecast.model";

import accuWeatherService from '../services/accuweather.service';

export interface WeatherState {
    currentConditionsLoading: boolean;
    currentConditions: {
        condition: string;
        temperature: string;
    },
    todaysForecastLoading: boolean;
    todaysForecast: {
        high: string;
        low: string;
    }
}

const initialState: WeatherState = {
    currentConditionsLoading: false,
    currentConditions: {
        condition: '',
        temperature: '',
    },
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
        setCurrentConditionsLoading: state => {
            state.currentConditionsLoading = true;
        },
        setCurrentConditions: (state, action: PayloadAction<AccuweatherCurrentCondition[]>) => {
            state.currentConditions = {
                condition: action.payload[0].WeatherText,
                temperature: `${action.payload[0].Temperature.Imperial.Value} F`
            };
            state.currentConditionsLoading = false;
        },
        clearCurrentConditions: state => {
            state.currentConditions = {
                condition: '',
                temperature: ''
            };
            state.currentConditionsLoading = false;
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
        clearTodaysForecast: state => {
            state.todaysForecast = {
                high: '',
                low: ''
            };
            state.todaysForecastLoading = false;
        },
    }
});

export const { setCurrentConditionsLoading, setCurrentConditions, clearCurrentConditions, setTodaysForecastLoading, setTodaysForecast, clearTodaysForecast } = weatherSlice.actions;

export const fetchCurrentConditions = (locationKey: string): AppThunk => dispatch => {
    dispatch(setCurrentConditionsLoading());

    if (locationKey) {
    accuWeatherService.getCurrentConditions(locationKey, response => {
        dispatch(setCurrentConditions(response));
    });
    } else {
        dispatch(clearCurrentConditions());
    }
};

export const fetch1DayForecast = (locationKey: string): AppThunk => dispatch => {
    dispatch(setTodaysForecastLoading());

    if (locationKey) {
        accuWeatherService.get1DayForecast(locationKey, response => {
            dispatch(setTodaysForecast(response));
        });
    } else {
        dispatch(clearTodaysForecast());
    }
};

export const getCurrentConditions = (state: RootState) => state.weather.currentConditions;
export const getTodaysForecast = (state: RootState) => state.weather.todaysForecast;

export default weatherSlice.reducer;