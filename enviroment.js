import Constants from 'expo-constants'

const ENV = {
    dev: {
        apiUrl: "https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/sky?fields=pronunciations&strictMatch=false",
        apiId: "082e8585",
        apiKey: "afb04366d8109d72a222d0870625faac",
    }
};

const getEnvVars = (env = Constants.manifest.releaseChannel) => {
    if (__DEV__) {
        return ENV.dev;
    }

}

export default getEnvVars;