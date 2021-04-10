const dev = {
    accuWeather: {
        apiKey: "AfK9DJsh5TSJ2ACh0WVJFuYbbCo8TzB9"
    }
};

const prod = {
    accuWeather: {
        apiKey: "SF09c477g2Pmb8hJ89Q54eaoA6hsf9HD"
    }
};

const config = process.env.REACT_APP_STAGE === 'production' ? prod : dev;

export default config;