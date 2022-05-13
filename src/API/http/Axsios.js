import * as axios from 'axios';


const instance = axios.create({
   withCredentials: true,
   baseURL: 'http://localhost:5000',
})
instance.interceptors.request.use(function (config) {
   config.headers.Authorization = `Bearrer ${localStorage.getItem('token')}`
   return config
});
export default instance