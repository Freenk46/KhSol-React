import SkinTreatments from '../SkinTreatments'
import { connect } from 'react-redux'
import { AddNewProcedureCart, } from '../../../redux/NewProcedure-reducer';
import { getemail, getlogin, getid, getisAuth } from '../../../selectors/auth-selectors'
import { getPricNavbarDate, getMicrodermabrasion, getSkinTreatmentsPoster, getSkinTreatmentsAbout } from '../../../selectors/SkinTreatments-selectors'
let mapStateToProps = (state) => {

  return {


    STPricNavbarData: getPricNavbarDate(state),
    state: getMicrodermabrasion(state),
    email: getemail(state),
    login: getlogin(state),
    id: getid(state),
    isAuth: getisAuth(state),
    Poster: getSkinTreatmentsPoster(state),
    About: getSkinTreatmentsAbout(state),


  }
}

const MicrodermabrasionConteiner = connect(mapStateToProps,
  {
    AddNewProcedureCart,
  })(SkinTreatments)
export default MicrodermabrasionConteiner;