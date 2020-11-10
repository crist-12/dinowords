import Constants from 'expo-constants'

const ENV = {
    dev: {
        apiUrl: "https://od-api.oxforddictionaries.com/api/v2/entries/en-gb/",
        apiUrlFinal : "?strictMatch=false",
        apiId: "082e8585",
        apiKey: "afb04366d8109d72a222d0870625faac",
        apiGifUrl: "https://api.giphy.com/v1/gifs/search?api_key=",
        apiGifKey: "gt26ZlfA7O0LBHpjDiFBIjlEab2ZlbsG",
        apiGifUrlMiddle: "&q=",
        apiGifUrlFinal: "&limit="
    }
};

const getEnvVars = (env = Constants.manifest.releaseChannel) => {
    if (__DEV__) {
        return ENV.dev;
    }

}

export default getEnvVars;

/* 	d42c1e2d
eba798adce81cad37e9d7a842dda5456 */