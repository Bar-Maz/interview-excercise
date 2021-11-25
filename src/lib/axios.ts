import axios from "axios"
import {API_URL} from "../constants/api";

axios.defaults.baseURL = API_URL;

// axios instance with baseURL set to API_URL

export default axios;