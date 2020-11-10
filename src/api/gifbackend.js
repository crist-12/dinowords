import axios from 'axios'
import getEnvVars from "../../enviroment";

const { apiGifUrl, apiGifKey, apiGifUrlMiddle, apiGifUrlFinal } = getEnvVars();


const gifinstance = axios.create(
{
    baseURL : apiGifUrl,
    middleURL: apiGifUrlMiddle,
    finalURL: apiGifUrlFinal,
    apiKey: apiGifKey
}
);


export default gifinstance;