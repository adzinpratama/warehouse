import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'http://52.163.51.143:40020/api/'
});

export default axiosClient;
