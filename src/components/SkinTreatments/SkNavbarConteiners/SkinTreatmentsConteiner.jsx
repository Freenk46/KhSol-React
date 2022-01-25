import SkinTreatments from '../SkinTreatments'
import { connect } from 'react-redux'
import { AddNewProcedureCart, } from '../../../redux/NewProcedure-reducer';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { getemail, getlogin, getid, getisAuth } from '../../../selectors/auth-selectors'
import { getPricNavbarDate, getCosmeticGradePeels, getSkinTreatmentsPoster, getSkinTreatmentsAbout } from '../../../selectors/SkinTreatments-selectors'
let mapStateToProps = (state) => {
   return {
      STPricNavbarData: getPricNavbarDate(state),
      state: getCosmeticGradePeels(state),
      email: getemail(state),
      login: getlogin(state),
      id: getid(state),
      isAuth: getisAuth(state),
      Poster: getSkinTreatmentsPoster(state),
      About: getSkinTreatmentsAbout(state),
   }
}

const SkinTreatmentsConteiner = compose(
   connect(mapStateToProps,
      {
         AddNewProcedureCart,
      }),
   withAuthRedirect

)
   (SkinTreatments)
export default SkinTreatmentsConteiner;