import config from '../config';
import { AccuweatherCurrentCondition } from '../models/accuweather-current-condition.model';
import { AccuweatherForecast } from '../models/accuweather-forecast.model';
import { AccuweatherLocation } from '../models/accuweather-location.model';

const baseUrl = 'http://dataservice.accuweather.com';

const api = {

    async getLocations(location: string, callback: (response: AccuweatherLocation[]) => any) {
        const res = await fetch(`${baseUrl}/locations/v1/search?apikey=${config.accuWeather.apiKey}&q=${location}`);
        const results = await res.json();
        callback(results);
    },

    async getCurrentConditions(locationKey: string, callback: (response: AccuweatherCurrentCondition[]) => any) {
        const res = await fetch(`${baseUrl}/currentconditions/v1/${locationKey}?apikey=${config.accuWeather.apiKey}`);
        const result = await res.json();
        callback(result);
    },

    async get1DayForecast(locationKey: string, callback: (response: AccuweatherForecast) => any) {
        const res = await fetch(`${baseUrl}/forecasts/v1/daily/1day/${locationKey}?apikey=${config.accuWeather.apiKey}`);
        const result = await res.json();
        callback(result);
    }
};

export default api;
