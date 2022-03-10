import * as axios from 'axios';

const instance = axios.create({
   withCredentials: true,
   baseURL: 'http://localhost:5000/',
})
export const authAPI = {
   Registration(email, password) {
      return axios.post('http://localhost:5000/auth/registration', { email: email, password: password })
         .then(response => {
            return response
         })
   },
   login(email, password) {
      return axios.post('http://localhost:5000/auth/login', { email: email, password: password })
         .then(response => {
            return response
         })

   },
}
export const ProfileAPI2 = {
   getProfile(userId) {
      return axios.get('http://localhost:5000/profile/', + userId)
         .then(response => {
            return response
         })
   },
   UpdateProfile(ProfileData) {
      return axios.put('http://localhost:5000/profile/', { ProfileData: ProfileData })
         .then(response => {
            return response
         })
   },
}


export const ProcedureAPI = {
   getAllProcedure() {
      return axios.get('http://localhost:5000/users/')
         .then(response => {
            return response
         })
   },
}
export const AdminAPI = {
   getAllUsers() {
      return axios.get('http://localhost:5000/users/')
         .then(response => {
            return response
         })
   },
   CreateUser() {
      return axios.post('http://localhost:5000/users/')
         .then(response => {
            return response
         })
   },
   BanUser(userId, BanReason) {
      return axios.post('http://localhost:5000/users/ban', { userId: userId, BanReason: BanReason })
         .then(response => {
            return response
         })
   },
   AddRoleUser(value, userId) {
      return axios.post('http://localhost:5000/users/role ', { value: value, userId: userId })
         .then(response => {
            return response
         })
   },
   CreateRole(value, description) {
      return axios.post('http://localhost:5000/role ', { value: value, description: description })
         .then(response => {
            return response
         })
   },
   getProfile(userId) {
      return axios.get('http://localhost:5000/profile/  ' + userId)
         .then(response => {
            return response
         })
   },
   addProcedure(ProceduData) {
      return axios.post('http://localhost:5000/procedures/', {
         name: ProceduData.name, duration: ProceduData.duration, price: ProceduData.price,
         typeId: ProceduData.typeId, classId: ProceduData.classId, info: ProceduData.info
      })
         .then(response => {
            return response
         })
   },
   addProcedureType(typeData) {
      return axios.post('http://localhost:5000/procedures/type', { name: typeData.name })
         .then(response => {
            return response
         })
   },
   addProcedureClass(classData) {
      return axios.post('http://localhost:5000/procedures/class', { name: classData.name })
         .then(response => {
            return response
         })
   },
   getAllClass() {
      return axios.get('http://localhost:5000/procedures/class')
         .then(response => {
            return response
         })
   },
   getAllType() {
      return axios.get('http://localhost:5000/procedures/type')
         .then(response => {
            return response
         })
   },

}




