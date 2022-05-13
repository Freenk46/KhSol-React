import * as axios from 'axios';

const instance = axios.create({
   withCredentials: true,
   baseURL: 'http://localhost:5000',
})
instance.interceptors.request.use(function (config) {
   config.headers.Authorization = `Bearrer ${localStorage.getItem('token')}`
   return config;
});
export const authAPI2 = {

   Registration(email, password) {
      return axios.post('http://localhost:5000/auth/registration', { email: email, password: password })
   },
   UpdateProfile(ProfileData) {
      return axios.put('http://localhost:5000/profile/', { ProfileData: ProfileData })
         .then(response => {
            return response
         })
   },
}
export const basketAPI = {
   getBasket(basketId) {
      return axios.get(`http://localhost:5000/basket/${basketId}`)
         .then(response => {

            return response
         })
   },
   addProcedureBasket() {

   }
}

export const ProcedureAPI = {
   getAllProcedure() {
      return axios.get('http://localhost:5000/procedures/')
         .then(response => {
            return response
         })
   },
}
export const AdminAPI = {
   getAllUsers(currentPage, pageSize) {
      return axios.get(`http://localhost:5000/users?page=${currentPage}&limit=${pageSize}`)
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
   CreateRole(RoleData) {
      return axios.post('http://localhost:5000/roles ', { value: RoleData.value, description: RoleData.description })
         .then(response => {
            return response
         })
   },
   getUser(userId) {
      return axios.get(`http://localhost:5000/users/${userId} `)
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
   UpdateType(typeData) {
      return axios.put('http://localhost:5000/procedures/type/', {
         name: typeData.name, id: typeData.id
      })
         .then(response => {
            return response
         })
   },
   UpdateClass(classData) {
      return axios.put('http://localhost:5000/procedures/class/', {
         name: classData.name, id: classData.id
      })
         .then(response => {
            return response
         })
   },
   UpdateProcedure(ProcedureData) {
      return axios.put('http://localhost:5000/procedures/', {
         name: ProcedureData.name, id: ProcedureData.id, duration: ProcedureData.duration, price: ProcedureData.price,
         typeId: ProcedureData.typeId, classId: ProcedureData.classId, info: ProcedureData.info
      })
         .then(response => {
            return response
         })
   },
   getAllRoles() {
      return axios.get('http://localhost:5000/roles/')
         .then(response => {
            return response
         })
   },
   userBan(BanReason, userId) {
      return axios.put('http://localhost:5000/users/ban ', { BanReason: BanReason, userId: userId })
         .then(response => {
            return response
         })
   },
   AddUserRole(value, userId) {
      return axios.post('http://localhost:5000/users/role ', { value: value, userId: userId })
         .then(response => {
            return response
         })
   },


}




