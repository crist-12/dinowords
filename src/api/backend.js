import axios from 'axios'
import getEnvVars from "../../enviroment";

const { apiUrl, api_id, api_key } = getEnvVars();


const instance = axios.create(
{
    baseURL : apiUrl,
    headers : {
        app_id : api_id,
        app_key: api_key
    } 
}
);


export default instance;