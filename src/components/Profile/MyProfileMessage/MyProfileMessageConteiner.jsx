import React from 'react';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { AddNewMessage, } from '../../../redux/Messages-reducer';
import { compose } from 'redux';
import MyProfileMessage from './MyProfileMessage';
import { getemail, getlogin, getid, getisAuth } from '../../../selectors/auth-selectors'
import { getTotalpriceCart } from '../../../selectors/NewProcedure-selectors'
import { getDialog } from '../../../selectors/Messages-selectors'
class MyProfileMessageConteiner extends React.Component {
   componentDidMount() {

   }
   render() {
      return (<MyProfileMessage {...this.props} />)
   }
}
let mapStateToProps = (state) => ({
   email: getemail(state),
   login: getlogin(state),
   img: state.authReducer.img,
   id: getid(state),
   TotalPrice: getTotalpriceCart(state),
   isAuth: getisAuth(state),
   Dialog: getDialog(state),
});
export default compose(
   connect(mapStateToProps,
      {
         AddNewMessage,
      }

   ),
   withAuthRedirect,
)
   (MyProfileMessageConteiner)