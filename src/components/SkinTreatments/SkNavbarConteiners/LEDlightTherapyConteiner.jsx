import SkinTreatments from '../SkinTreatments'
import { connect } from 'react-redux'
import { AddNewProcedureCart, } from '../../../redux/NewProcedure-reducer';
let mapStateToProps = (state) => {
  debugger;

  return {

    STPricNavbarData: state.SkinTreatmentsreducer.SkinTreatments.PricNavbarDate,
    state: state.SkinTreatmentsreducer.SkinTreatments.LEDlightTherapy,
    email: state.authReducer.email,
    login: state.authReducer.login,
    id: state.authReducer.id,
    Poster: state.SkinTreatmentsreducer.SkinTreatments.Poster,
    About: state.SkinTreatmentsreducer.SkinTreatments.About,
  }
}

const LEDlightTherapyConteiner = connect(mapStateToProps,
  {
    AddNewProcedureCart,
  })(SkinTreatments)
export default LEDlightTherapyConteiner;