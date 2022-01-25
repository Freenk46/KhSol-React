import React from 'react';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';
import MyProfileProcedures from './MyProfileProcedures';
import { getemail, getlogin, getid, getisAuth } from '../../../selectors/auth-selectors'
import { getMyProcedure, getTotalpriceCart } from '../../../selectors/NewProcedure-selectors'
class MyProfileProcedureConteiner extends React.Component {
   componentDidMount() {
   }
   render() {
      return (<MyProfileProcedures {...this.props} />)
   }
}
let mapStateToProps = (state) => ({
   email: getemail(state),
   login: getlogin(state),
   img: state.authReducer.img,
   id: getid(state),
   MyProcedure: getMyProcedure(state),
   TotalPrice: getTotalpriceCart(state),
   isAuth: getisAuth(state),
});
export default compose(
   connect(mapStateToProps),
   withAuthRedirect,
)
   (MyProfileProcedureConteiner)