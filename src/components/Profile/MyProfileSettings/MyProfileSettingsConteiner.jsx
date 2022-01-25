import React from 'react';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';
import MyProfileSettings from './MyProfileSettings';
import { getemail, getlogin, getid, getisAuth } from '../../../selectors/auth-selectors'
import { getTotalpriceCart } from '../../../selectors/NewProcedure-selectors'
class MyProfileSettingsConteiner extends React.Component {
   componentDidMount() {
   }
   render() {
      return (<MyProfileSettings {...this.props} />)
   }
}
let mapStateToProps = (state) => ({
   email: getemail(state),
   login: getlogin(state),
   img: state.authReducer.img,
   id: getid(state),
   TotalPrice: getTotalpriceCart(state),
   isAuth: getisAuth(state),
});
export default compose(
   connect(mapStateToProps),
   withAuthRedirect,
)
   (MyProfileSettingsConteiner)