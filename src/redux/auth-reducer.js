import { authAPI } from "../API/API";

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

export const SetAuthUserData = (id, email, login) => ({ type: SET_USERS_DATA, data: { id, email, login } })
export const getAuthUsersDataThunk = (userId) => (dispatch) => {
   authAPI.authMe().then(response => {
      if (response.data.resultCode === 0) {
         let { id, email, login } = response.data.data;
         dispatch(SetAuthUserData(id, email, login));
      }
   });
}
export default authReducer;