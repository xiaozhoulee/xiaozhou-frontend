import axios from "axios"
// import Cookies from 'js-cookie'

const service = axios.create({
    // baseURL: process.env.BASE_API, // api的base_url
    baseURL: "http://127.0.0.1:7001"
})

service.interceptors.request.use(config => {
    config.headers.token = localStorage.getItem('token');
    return config;
}, error => {
    console.log(error);
})

service.interceptors.response.use(response => {
    const res = response.data;
    if (res.code !== 200) {
        return response.data;
    } else {
        return response.data;
    }
}, error => {
    console.log(error);
})

export default service