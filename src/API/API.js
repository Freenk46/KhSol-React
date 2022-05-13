import * as axios from 'axios';

const instance = axios.create({
   withCredentials: true,
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   headers: {
      "API-KEY": "fa53da69-9bb5-4c00-9664-e16bc775a1db"
   }
})
export const ProfileAPI = {
   getProfile(userId) {
      return instance.get(`profile/` + userId);
   },
   getStatus(userId) {
      return instance.get(`profile/status/` + userId);
   },
   UpdateStatus(status) {
      return instance.put(`profile/status/`, { status: status });
   },
   SavePhoto(file) {
      const formData = new FormData();
      formData.append("image", file)
      return instance.put(`profile/photo`, formData, {
         headers: {
            'Content-Type': ' multipart/form-data'
         }
      })
         .then(response => {
            return response.data;
         });
   }
}
export const userAPI = {
   getUsers(currentPage = 1, pageSize = 10) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
         .then(response => {
            return response.data;
         });

   },
   authUser() {
      return instance.get(`auth/me`,)
         .then(response => {
            return response.data;
         });
   },
}
export const authAPI = {
   authMe() {
      return instance.get(`auth/me`);
   },
   login(email, password, rememberMe = false) {
      return instance.post(`auth/login`, { email, password, rememberMe });
   },
   logout() {
      return instance.delete(`auth/login`);
   },
}

