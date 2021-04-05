const dev = {
    accuWeather: {
        apiKey: "LYh6wRu7WJlBTnmAa9zEIf5vo7nOIKmA"
    }
};

const prod = {
    accuWeather: {
        apiKey: "LYh6wRu7WJlBTnmAa9zEIf5vo7nOIKmA"
    }
};

const config = process.env.REACT_APP_STAGE === 'production' ? prod : dev;

export default config;