
import { getAuthUsersDataThunk } from "./auth-reducer";

const INITIALAIZED_SUCCESS = 'INITIALAIZED_SUCCESS';
let initialState = {
   initialized: false,

}
const AppReducer = (state = initialState, action) => {
   switch (action.type) {
      case INITIALAIZED_SUCCESS: {
         return {
            ...state,
            initialized: true,
         }
      }
      default:
         return state;
   }
}

export const InitialaizedSuccess = () => ({ type: INITIALAIZED_SUCCESS });
export const InitialaizedApp = () => (dispatch) => {
   let promise = dispatch(getAuthUsersDataThunk());
   Promise.all([promise])
      .then(() => {
         dispatch(InitialaizedSuccess());
      });

}
export default AppReducer;