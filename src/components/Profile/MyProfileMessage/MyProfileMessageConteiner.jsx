import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { AddNewMessage, } from '../../../redux/Messages-reducer';
import { compose } from 'redux';
import MyProfileMessage from './MyProfileMessage';
import { getid, getisAuth } from '../../../selectors/auth-selectors'
import { getTotalpriceCart } from '../../../selectors/Procedure-selectors'
import { getDialog } from '../../../selectors/Messages-selectors'
import { getStatus, getProfile } from '../../../selectors/Profile-selectors';
import { getMyStatus, UpdateMyStatus, getMyProfileThunk } from '../../../redux/Profile-reducer'
import { getLogoImg } from '../../../selectors/App-selectors'

class MyProfileMessageConteiner extends PureComponent {


   componentDidMount() {

   }
   componentDidUpdate() {

   };
   render() {
      return (<MyProfileMessage {...this.props} />)
   }
}
let mapStateToProps = (state) => ({
   Profile: getProfile(state),
   img: getLogoImg(state),
   id: getid(state),
   TotalPrice: getTotalpriceCart(state),
   isAuth: getisAuth(state),
   Dialog: getDialog(state),
   status: getStatus(state),

});
export default compose(
   connect(mapStateToProps,
      {
         getMyStatus,
         UpdateMyStatus,
         getMyProfileThunk,
         AddNewMessage,
      }
   ),
   withAuthRedirect,
)
   (MyProfileMessageConteiner)