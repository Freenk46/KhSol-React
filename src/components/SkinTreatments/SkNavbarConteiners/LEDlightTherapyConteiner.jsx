import SkinTreatments from '../SkinTreatments'
import { connect } from 'react-redux'
import { AddNewProcedure, UpdateNewName, UpdateNewSurname, UpdateNewEmail, UpdateNewProcedureName, UpdateNewProcedureClass, UpdateNewNumber, UpdateNewGender } from '../../../redux/NewProcedure-reducer';
let mapStateToProps = (state) => {
  debugger;

  return {

    STPricNavbarData: state.SkinTreatmentsreducer.SkinTreatments.PricNavbarDate,
    state: state.SkinTreatmentsreducer.SkinTreatments.LEDlightTherapy,
    email: state.authReducer.email,
    login: state.authReducer.login,
    id: state.authReducer.id,

  }
}

const LEDlightTherapyConteiner = connect(mapStateToProps,
  {
    AddNewProcedure, UpdateNewName, UpdateNewSurname,
    UpdateNewEmail, UpdateNewProcedureName, UpdateNewProcedureClass,
    UpdateNewNumber, UpdateNewGender
  })(SkinTreatments)
export default LEDlightTherapyConteiner;