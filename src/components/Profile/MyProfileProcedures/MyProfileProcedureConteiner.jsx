import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';
import MyProfileProcedures from './MyProfileProcedures';
import { getid, getisAuth } from '../../../selectors/auth-selectors'
import { getMyProcedure, getTotalpriceCart } from '../../../selectors/Procedure-selectors'
import { getStatus, getProfile } from '../../../selectors/Profile-selectors';
import { getMyStatus, UpdateMyStatus, getMyProfileThunk } from '../../../redux/Profile-reducer'

class MyProfileProcedureConteiner extends PureComponent {
   componentDidMount() {
      let userId = this.props.id;
      if (!userId) {
         this.props.history.push("/login");
      };
   };
   render() {
      return (<MyProfileProcedures {...this.props} />)
   }
}
let mapStateToProps = (state) => ({
   Profile: getProfile(state),
   img: state.authReducer.img,
   id: getid(state),
   MyProcedure: getMyProcedure(state),
   TotalPrice: getTotalpriceCart(state),
   isAuth: getisAuth(state),
   status: getStatus(state),
});
export default compose(
   connect(mapStateToProps,
      {
         getMyStatus,
         UpdateMyStatus,
         getMyProfileThunk
      }
   ),
   withAuthRedirect
)
   (MyProfileProcedureConteiner)