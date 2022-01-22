import SkinTreatments from '../SkinTreatments'
import { connect } from 'react-redux'
import { AddNewProcedureCart, } from '../../../redux/NewProcedure-reducer';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';
let mapStateToProps = (state) => {
   return {
      STPricNavbarData: state.SkinTreatmentsreducer.SkinTreatments.PricNavbarDate,
      state: state.SkinTreatmentsreducer.SkinTreatments.CosmeticGradePeels,
      email: state.authReducer.email,
      login: state.authReducer.login,
      id: state.authReducer.id,
      isAuth: state.authReducer.isAuth,
      Poster: state.SkinTreatmentsreducer.SkinTreatments.Poster,
      About: state.SkinTreatmentsreducer.SkinTreatments.About,
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