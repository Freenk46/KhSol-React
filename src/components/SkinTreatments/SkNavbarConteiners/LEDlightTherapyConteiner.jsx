import SkinTreatments from '../SkinTreatments'
import { connect } from 'react-redux'
import { AddNewProcedureCart, } from '../../../redux/NewProcedure-reducer';
import { getemail, getlogin, getid, getisAuth } from '../../../selectors/auth-selectors'
import { getPricNavbarDate, getLEDlightTherapy, getSkinTreatmentsPoster, getSkinTreatmentsAbout } from '../../../selectors/SkinTreatments-selectors'
let mapStateToProps = (state) => {

  return {
    STPricNavbarData: getPricNavbarDate(state),
    state: getLEDlightTherapy(state),
    email: getemail(state),
    login: getlogin(state),
    id: getid(state),
    isAuth: getisAuth(state),
    Poster: getSkinTreatmentsPoster(state),
    About: getSkinTreatmentsAbout(state),
  }
}

const LEDlightTherapyConteiner = connect(mapStateToProps,
  {
    AddNewProcedureCart,
  })(SkinTreatments)
export default LEDlightTherapyConteiner;