const ADD_ROCEDURE = 'ADD-ROCEDURE';
const UPDATE_NEW_NAME = 'UPDATE-NEW-NAME';
const UPDATE_NEW_SURNAME = 'UPDATE-NEW-SURNAME';
const UPDATE_NEW_EMAIL = 'UPDATE-NEW-EMAIL';
const UPDATENEW_PROCEDURENAME = 'UPDATENEW-PROCEDURENAME';
const UPDATENEW_PROCEDURECLASS = 'UPDATENEW-PROCEDURECLASS';
const UPDATE_NEW_NUMBER = 'UPDATE-NEW-NAMBER';
const UPDATE_NEW_GENDER = 'UPDATE-NEW-GENDER';
let initialState = {
  NewProcedure: {
    ProcedureLaserHairRemoval: [
      { id: '0', ProcedureName: 'MaleFullBody', ProcedureClass: 'FullBody', Gender: 'Men', Name: 'Sergi', Surname: 'gvazava', Email: 'serguna.sergi@gmail.com', Numer: '551093330' },

    ],
    NewElementProcedureName: 'Enter your ProcedureName',
    NewElementProcedureClass: 'Enter your ProcedureClass',
    NewElementGender: 'Enter your Gender',
    NewElementName: 'Enter your Name',
    NewElementSurname: 'Enter your Surname',
    NewElementEmail: 'Enter your Eemail',
    NewElementNumber: 'Enter your Number',
    id: 0,

  },
}
const NewProcedureReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ROCEDURE: {
      let id = [state.NewProcedure.ProcedureLaserHairRemoval.length + 1]
      let NewProcedure = {

        id: id,
        Name: state.NewProcedure.NewElementName,
        Surname: state.NewProcedure.NewElementSurname,
        Email: state.NewProcedure.NewElementEmail,
        ProcedureName: state.NewProcedure.NewElementProcedureName,
        ProcedureClass: state.NewProcedure.NewElementProcedureClass,
        Numer: state.NewProcedure.NewElementNumber,
        Gender: state.NewProcedure.NewElementGender,
      }
      let stateCopy = { ...state };
      stateCopy.NewProcedure.id = id
      stateCopy.NewProcedure.ProcedureLaserHairRemoval = [...state.NewProcedure.ProcedureLaserHairRemoval];
      stateCopy.NewProcedure.ProcedureLaserHairRemoval.push(NewProcedure);
      return state;
    }
    case UPDATE_NEW_NAME: {
      let stateCopy = { ...state };
      stateCopy.NewProcedure.NewElementName = action.Name;
      return state;
    }
    case UPDATE_NEW_SURNAME: {
      let stateCopy = { ...state };
      stateCopy.NewProcedure.NewElementSurname = action.Surname;
      return state;
    }
    case UPDATE_NEW_EMAIL: {
      let stateCopy = { ...state };
      stateCopy.NewProcedure.NewElementEmail = action.Email;
      return state;
    }
    case UPDATENEW_PROCEDURENAME: {
      let stateCopy = { ...state };
      stateCopy.NewProcedure.NewElementProcedureName = action.ProcedureName;
      return state;
    }
    case UPDATENEW_PROCEDURECLASS: {
      let stateCopy = { ...state };
      stateCopy.NewProcedure.NewElementProcedureClass = action.ProcedureClass;
      return state;
    }
    case UPDATE_NEW_NUMBER: {
      let stateCopy = { ...state };
      stateCopy.NewProcedure.NewElementNumber = action.Number;
      return state;
    }
    case UPDATE_NEW_GENDER: {
      let stateCopy = { ...state };
      stateCopy.NewProcedure.NewElementGender = action.Gender;
      return state;
    }
    default:
      return state;
  }
}
export const AddNewProcedure = () => ({ type: ADD_ROCEDURE })
export const UpdateNewName = (Name) => ({ type: UPDATE_NEW_NAME, Name })
export const UpdateNewSurname = (Surname) => ({ type: UPDATE_NEW_SURNAME, Surname })
export const UpdateNewEmail = (Email) => ({ type: UPDATE_NEW_EMAIL, Email })
export const UpdateNewProcedureName = (ProcedureName) => ({ type: UPDATENEW_PROCEDURENAME, ProcedureName })
export const UpdateNewProcedureClass = (ProcedureClass) => ({ type: UPDATENEW_PROCEDURECLASS, ProcedureClass })
export const UpdateNewNumber = (Number) => ({ type: UPDATE_NEW_NUMBER, Number })
export const UpdateNewGender = (Gender) => ({ type: UPDATE_NEW_GENDER, Gender })
export default NewProcedureReducer;