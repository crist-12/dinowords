import axios from 'axios'
import getEnvVars from "../../enviroment";

const { apiUrl, api_id, api_key, apiUrlFinal } = getEnvVars();


const instance = axios.create(
{
    baseURL : apiUrl,
    finalURL: apiUrlFinal,
    headers : {
        app_id : api_id,
        app_key: api_key
    } 
}
);


export default instance;