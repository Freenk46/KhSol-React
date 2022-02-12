import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';
import MyProfileCart from './MyProfileCart';
import { DelNewProcedureCart, BayNewProcedure } from '../../../redux/Procedure-reducer';
import { getid, getisAuth } from '../../../selectors/auth-selectors'
import { getCartProcedure, getTotalpriceCart } from '../../../selectors/Procedure-selectors'
import { AllLaserProcedureIsBooked, LaserProcedureIsBooked } from '../../../redux/LaserHairRemoval-reducer'
import { AllBookedRemoval, TreatmentProcedureIsBooked } from '../../../redux/SkinTreatments-reducer'
import { getStatus, getProfile } from '../../../selectors/Profile-selectors';
import { UpdateMyStatus, getMyStatus, getMyProfileThunk } from '../../../redux/Profile-reducer'

class MyProfileCartConteiner extends PureComponent {
   componentDidMount() {

   };
   componentDidUpdate(prevProps, prevState, snapshot) {
   };
   render() {
      return (<MyProfileCart  {...this.props} />)
   };
};
let mapStateToProps = (state) => ({
   Profile: getProfile(state),
   img: state.authReducer.img,
   id: getid(state),
   CartProcedure: getCartProcedure(state),
   TotalPrice: getTotalpriceCart(state),
   isAuth: getisAuth(state),
   status: getStatus(state),
});
export default compose(
   connect(mapStateToProps,
      {
         UpdateMyStatus,
         getMyStatus,
         TreatmentProcedureIsBooked,
         AllBookedRemoval,
         AllLaserProcedureIsBooked,
         LaserProcedureIsBooked,
         DelNewProcedureCart,
         BayNewProcedure,
         getMyProfileThunk,
      }
   ),
   withAuthRedirect,
)
   (MyProfileCartConteiner)