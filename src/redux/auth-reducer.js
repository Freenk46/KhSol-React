import { authAPI } from "../API/API";

const SET_USERS_DATA = 'SET_USERS_DATA';
let initialState = {
   id: null,
   email: null,
   login: null,
   isAuth: false,
   img: 'https://i.pinimg.com/736x/cf/04/c1/cf04c1f86d5d9920131276f4db7ea7bf.jpg',
}
const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_USERS_DATA: {
         return {
            ...state,
            ...action.data,
            isAuth: true,
         }
      }
      default: return state;
   }
}

export const SetAuthUserData = (id, email, login, isAuth) => ({ type: SET_USERS_DATA, data: { id, email, login, isAuth } })
export const getAuthUsersDataThunk = (id) => (dispatch) => {
   return authAPI.authMe().then(response => {
      if (response.data.resultCode === 0) {
         let { id, login, email } = response.data.data;
         dispatch(SetAuthUserData(id, email, login, true));
      }
   });
}
export const login = (email, password, rememberMe) => (dispatch) => {
   authAPI.login(email, password, rememberMe)
      .then(response => {
         if (response.data.resultCode === 0) {
            dispatch(getAuthUsersDataThunk())
         }
      });
}
export const logout = () => (dispatch) => {
   authAPI.logout()
      .then(response => {
         if (response.data.resultCode === 0) {
            dispatch(SetAuthUserData(null, null, null, false))
         }
      });
}
export default authReducer;