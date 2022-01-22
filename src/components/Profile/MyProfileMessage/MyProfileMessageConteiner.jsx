import React from 'react';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { AddNewMessage, } from '../../../redux/Messages-reducer';
import { compose } from 'redux';
import MyProfileMessage from './MyProfileMessage';
class MyProfileMessageConteiner extends React.Component {
   componentDidMount() {

   }
   render() {
      return (<MyProfileMessage {...this.props} />)
   }
}
let mapStateToProps = (state) => ({
   email: state.authReducer.email,
   login: state.authReducer.login,
   img: state.authReducer.img,
   id: state.authReducer.id,
   NewProcedure: state.NewProcedureReducer.NewProcedure.Procedure,
   TotalPrice: state.NewProcedureReducer.NewProcedure.Price,
   isAuth: state.authReducer.isAuth,
   Dialog: state.MessagesReducer.Messages.Dialog,
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