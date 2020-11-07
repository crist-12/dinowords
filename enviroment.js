import Constants from 'expo-constants'

const ENV = {
    dev: {
        apiUrl: "https://od-api.oxforddictionaries.com/api/v2/",
        APIKEY: "afb04366d8109d72a222d0870625faac",
        apiID: "082e8585"
    }
};

const getEnvVars = (env = Constants.manifest.releaseChannel) => {
    if (__DEV__) {
        return ENV.dev;
    }

}

export default getEnvVars;