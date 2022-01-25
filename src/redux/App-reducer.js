
import { getAuthUsersDataThunk } from "./auth-reducer";

const INITIALAIZED_SUCCESS = 'INITIALAIZED_SUCCESS';
let initialState = {

   NbD: [
      { name: 'LaserHairRemoval', NavbarPath: 'LaserHairRemoval', },
      { name: 'SkinCare', NavbarPath: 'SkinCare' },
      { name: 'CosmeticInjections ', NavbarPath: 'CosmeticInjections' },
      { name: 'Promo', NavbarPath: 'Promo' },
      { name: 'Procedure', NavbarPath: 'Procedure' },
      { name: 'Register', NavbarPath: 'Register' },
   ],
   HNbD: [
      { name: 'OurStory', HeaderNavbarPath: 'OurStory' },
      { name: 'MedicalTeam', HeaderNavbarPath: 'MedicalTeam' },
      { name: 'COVID Info', HeaderNavbarPath: 'COVID Info' },
      { name: 'Users', HeaderNavbarPath: 'Users' },
      { name: 'MyProfile', HeaderNavbarPath: 'MyProfile' }
   ],
   img: 'https://i.pinimg.com/736x/cf/04/c1/cf04c1f86d5d9920131276f4db7ea7bf.jpg',

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