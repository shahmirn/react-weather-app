import config from '../config';
import { AccuweatherCurrentCondition } from '../models/accuweather-current-condition.model';
import { AccuweatherForecast } from '../models/accuweather-forecast.model';
import { AccuweatherLocation } from '../models/accuweather-location.model';

const baseUrl = 'https://dataservice.accuweather.com';

const api = {

    async getLocations(location: string | number, callback: (response: AccuweatherLocation[]) => any) {
        let baseUrl;
        if (!isNaN(location as number) && location.toString().length === 5) {
            baseUrl = 'https://www.accuweather.com/web-api/zip-autocomplete?language=en-us&query=';
        } else {
            baseUrl = 'https://www.accuweather.com/web-api/autocomplete?language=en-us&query=';
        }

        const res = await fetch(`${baseUrl}${location}`);
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
