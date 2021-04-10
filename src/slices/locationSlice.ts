import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../store";

import accuWeatherService from '../services/accuweather.service';

import { AccuweatherLocation } from '../models/accuweather-location.model';

interface Location {
    key: string;
    city: string;
    administrativeArea: string; // State, Province, etc
    countryID: string;
}

interface SearchResults {
    searching: boolean,
    results: Location[],
    locationKey: string;
}

const initialState: SearchResults = {
    searching: false,
    results: [],
    locationKey: ''
};

export const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        setSearchStart: state => {
            state.searching = true;
        },
        setSearchResults: (state, action: PayloadAction<AccuweatherLocation[]>) => {
            state.searching = false;
            state.results = action.payload.map(datum => ({
                key: datum.Key,
                city: datum.LocalizedName,
                administrativeArea: datum.AdministrativeArea.LocalizedName,
                countryID: datum.Country.ID
            }))
        },
        setLocationKey: (state, action: PayloadAction<string>) => {
            state.locationKey = action.payload;
        }
    }
});

export const { setSearchStart, setSearchResults, setLocationKey } = locationSlice.actions;

export const fetchSearchResults = (search: string): AppThunk => dispatch => {
    if (search) {
        dispatch(setSearchStart());

        accuWeatherService.getLocations(search, response => {
            dispatch(setSearchResults(response));
        });
    } else {
        dispatch(setSearchResults([]));
    }
};

export const getLocationSearching = (state: RootState) => state.locationSearch.searching;
export const getLocationResults = (state: RootState) => state.locationSearch.results;
export const getLocationKey = (state: RootState) => state.locationSearch.locationKey;

export default locationSlice.reducer;