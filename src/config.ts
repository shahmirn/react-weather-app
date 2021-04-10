const dev = {
    accuWeather: {
        apiKey: "Wpm6sx2Sk4eWe3oAQPjor3lkl6Wq8JHr"
    }
};

const prod = {
    accuWeather: {
        apiKey: "Wpm6sx2Sk4eWe3oAQPjor3lkl6Wq8JHr"
    }
};

const config = process.env.REACT_APP_STAGE === 'production' ? prod : dev;

export default config;