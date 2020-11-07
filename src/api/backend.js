import axios from 'axios'
import getEnvVars from "../../enviroment";

const { apiUrl } = getEnvVars();

const intance = axios.create(
{
    baseURL = apiUrl
}
)


export default intance