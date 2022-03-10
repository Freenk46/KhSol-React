import { authAPI } from "../API/API";
import { getMyProfileThunk, getMyStatus } from "./Profile-reducer";

const SET_USERS_DATA = 'SET_USERS_DATA';
let initialState = {
   id: null,
   email: null,
   login: null,
   isAuth: false,
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
         dispatch(getMyProfileThunk(id));
         dispatch(getMyStatus(id));
      }
   });
}
export const login = (email, password, rememberMe) => async (dispatch) => {
   let response = await authAPI.login(email, password, rememberMe)
   if (response.data.resultCode === 0) {
      dispatch(getAuthUsersDataThunk())
   }
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