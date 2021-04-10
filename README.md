# Weather App - React Frontend - Showcase Project

Project Requirements

Build a React app to display weather information. The UI implementation should prompt for a location, and display the resulting weather.

## Working Demo

https://react-weather-app-871a0.firebaseapp.com

## Version
0.0.1

## Instructions for usage
- Navigate to URL
- Start typing in your city name, and pick a result from the suggestions

## Weather APIs
- Autocomplete API from https://developer.accuweather.com/accuweather-locations-api/apis
- Current Conditions API from https://developer.accuweather.com/accuweather-current-conditions-api/apis
- 1 day forecast from https://developer.accuweather.com/accuweather-forecast-api/apis

## Implementation Caveats
- The API keys are hard-coded in config.ts. Since there doesn't seem to be a way in accuweather to limit the keys to certain domains, In a true system, there would be a wrapper back-end API, where the API keys would be, so that they're not exposed to the front-end
- The accuweather API only gives suggestions for cities, for example, Houston. Typing in Houston, TX does not return any results
- The accuweather autocomplete API does not return results for zip codes

## Tech
* [React] - A JavaScript library for building user interfaces
* [Redux] - A predictable state container for JavaScript apps.
* [React-Redux] - Official React bindings for Redux
* [Redux Thunk] - Thunk middleware for Redux.
* [Material UI] - React components that implement Google's Material Design.
* [Lodash] - A modern JavaScript utility library delivering modularity, performance & extras.
* [Typescript] - An open-source language which builds on JavaScript.
* [Jest] - Delightful JavaScript Testing.

## Running locally
- git clone https://github.com/shahmirn/react-weather-app
- cd react-weather-app
- npm install
- npm run start
- Go to http://localhost:3000/

## Todo's
- Add additional unit tests, specifically for the LocationSearch component
- Better error handling, specifically displaying an error message if we've exceeded the AccuWeather API limit

[React]:https://reactjs.org/
[Redux]:https://redux.js.org/
[React-Redux]:https://react-redux.js.org/
[Redux Thunk]:https://github.com/reduxjs/redux-thunk
[Material UI]:https://material-ui.com/
[Typescript]:https://www.typescriptlang.org/
[Lodash]:https://lodash.com/
[Jest]:https://jestjs.io/