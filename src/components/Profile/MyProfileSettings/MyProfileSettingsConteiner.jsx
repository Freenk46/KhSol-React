import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';
import MyProfileSettings from './MyProfileSettings';
import { getid, getisAuth } from '../../../selectors/auth-selectors'
import { getTotalpriceCart } from '../../../selectors/Procedure-selectors'
import { getStatus, getProfile, } from '../../../selectors/Profile-selectors';
import { getMyStatus, UpdateMyStatus, getMyProfileThunk, SavePhoto } from '../../../redux/Profile-reducer'

class MyProfileSettingsConteiner extends PureComponent {
   componentDidMount() {
   };
   componentDidUpdate(prevProps, prevState, snapshot) {

   }
   render() {
      return (<MyProfileSettings {...this.props} />)
   };
};
let mapStateToProps = (state) => ({
   Profile: getProfile(state),
   img: state.authReducer.img,
   id: getid(state),
   TotalPrice: getTotalpriceCart(state),
   isAuth: getisAuth(state),
   status: getStatus(state),
});
export default compose(
   connect(mapStateToProps,
      {
         getMyStatus,
         UpdateMyStatus,
         getMyProfileThunk,
         SavePhoto,
      }),
)
   (MyProfileSettingsConteiner)