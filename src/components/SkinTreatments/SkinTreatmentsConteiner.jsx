import SkinTreatments from './SkinTreatments'
import React, { PureComponent } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux'
import { TreatmentProcedureIsBooked, setProcedureType } from '../../redux/SkinTreatments-reducer';
import { AddNewProcedureCart, } from '../../redux/Procedure-reducer';
import { getemail, getlogin, getid, getisAuth } from '../../selectors/auth-selectors'
import { getTreatmentsPricNavbarData, getTreatmentProcedure, getTreatmentsPoster, getTreatmentsAbout, getindex } from '../../selectors/SkinTreatments-selectors'
class SkinTreatmentsConteiner extends PureComponent {
   componentDidMount() {
   }
   render() {
      return (<SkinTreatments  {...this.props} />)
   }
}
let mapStateToProps = (state) => {
   return {
      STPricNavbarData: getTreatmentsPricNavbarData(state),
      TreatmentsProcedures: getTreatmentProcedure(state),
      email: getemail(state),
      login: getlogin(state),
      id: getid(state),
      isAuth: getisAuth(state),
      Poster: getTreatmentsPoster(state),
      About: getTreatmentsAbout(state),
      index: getindex(state),
   }
}
export default compose(
   connect(mapStateToProps,
      {
         TreatmentProcedureIsBooked,
         AddNewProcedureCart,
         setProcedureType,
      }
   ),
)
   (SkinTreatmentsConteiner)