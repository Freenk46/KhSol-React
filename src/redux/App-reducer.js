
import { AdminAPI } from "../API/RestAPI";
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
      { id: 3, name: 'MyProfile', NavbarPath: 'MyProfile' }
   ],
   FND: [
      { id: 0, name: 'Profile Cart', NavbarPath: 'MyProfile/Cart' },
      { id: 1, name: 'My Procedure', NavbarPath: 'MyProfile/MyProcedure' },
      { id: 2, name: 'Profile Setting', NavbarPath: 'MyProfile/Setting' },
      { id: 3, name: 'Chat', NavbarPath: 'MyProfile/Chat' },
   ],
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

export const AddProcedureClass = (classData) => async () => {
   const response = await AdminAPI.addProcedureClass(classData)
   return response.data
}
export const AddProcedureType = (typeData) => async () => {
   const response = await AdminAPI.addProcedureType(typeData)
   return response.data
}
export const addProcedure = (ProceduData) => async () => {
   const response = await AdminAPI.addProcedure(ProceduData)
   return response.data
}
export const UpdateProcedureType = (typeData) => async () => {
   const response = await AdminAPI.UpdateType(typeData)
   return response.data
}
export const UpdateProcedureClass = (ClassData) => async () => {
   const response = await AdminAPI.UpdateClass(ClassData)
   return response.data
}
export const updateProcedure = (ProcedureData) => async () => {
   const response = await AdminAPI.UpdateProcedure(ProcedureData)
   return response.data
}
export const CreateRole = (RoleData) => async () => {
   const response = await AdminAPI.CreateRole(RoleData)
   return response.data
}


export default AppReducer;