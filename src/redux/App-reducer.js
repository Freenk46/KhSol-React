
import { getAuthUsersDataThunk } from "./auth-reducer";

const INITIALAIZED_SUCCESS = 'INITIALAIZED_SUCCESS';
let initialState = {

   NbD: [
      { id: 0, name: 'LaserHairRemoval', NavbarPath: 'LaserHairRemoval', },
      { id: 1, name: 'SkinCare', NavbarPath: 'SkinCare' },
      { id: 2, name: 'CosmeticInjections ', NavbarPath: 'CosmeticInjections' },

   ],
   HNbD: [
      { id: 0, name: 'OurStory', NavbarPath: 'OurStory' },
      { id: 1, name: 'MedicalTeam', NavbarPath: 'MedicalTeam' },
      { id: 2, name: 'COVID Info', NavbarPath: 'COVID Info' },
      { id: 3, name: 'Users', NavbarPath: 'Users' },
      { id: 4, name: 'MyProfile', NavbarPath: 'MyProfile' }
   ],
   FND: [
      { id: 0, name: 'Profile Cart', NavbarPath: 'MyProfile/Cart' },
      { id: 1, name: 'My Procedure', NavbarPath: 'MyProfile/MyProcedure' },
      { id: 2, name: 'Profile Setting', NavbarPath: 'MyProfile/Setting' },
      { id: 3, name: 'Chat', NavbarPath: 'MyProfile/Chat' },
   ],
   initialized: false,
   img: "https://media.istockphoto.com/vectors/property-corporate-icon-logo-sign-abstract-design-gold-color-on-black-vector-id1153638665?k=20&m=1153638665&s=612x612&w=0&h=0-mZ0r7xrF9LSSkosidcQ8MI7gmmN9guHC1JMChdClA="
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