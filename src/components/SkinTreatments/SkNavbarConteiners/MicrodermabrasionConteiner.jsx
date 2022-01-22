import SkinTreatments from '../SkinTreatments'
import { connect } from 'react-redux'
import { AddNewProcedureCart, } from '../../../redux/NewProcedure-reducer';
let mapStateToProps = (state) => {

  return {


    STPricNavbarData: state.SkinTreatmentsreducer.SkinTreatments.PricNavbarDate,
    state: state.SkinTreatmentsreducer.SkinTreatments.Microdermabrasion,
    email: state.authReducer.email,
    login: state.authReducer.login,
    id: state.authReducer.id,
    Poster: state.SkinTreatmentsreducer.SkinTreatments.Poster,
    About: state.SkinTreatmentsreducer.SkinTreatments.About,
  }
}

const MicrodermabrasionConteiner = connect(mapStateToProps,
  {
    AddNewProcedureCart,
  })(SkinTreatments)
export default MicrodermabrasionConteiner;