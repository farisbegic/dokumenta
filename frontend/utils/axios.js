import axios from 'axios';
import config from '../config';

const API = axios.create({
    baseURL: config.api_url,
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: true
})

API.interceptors.request.use(
    function (config) {
        const token = localStorage.getItem("accessToken")
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default API;