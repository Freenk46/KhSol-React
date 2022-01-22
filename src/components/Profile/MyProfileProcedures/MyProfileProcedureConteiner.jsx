import React from 'react';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';
import MyProfileProcedures from './MyProfileProcedures';
class MyProfileProcedureConteiner extends React.Component {
   componentDidMount() {
   }
   render() {
      return (<MyProfileProcedures {...this.props} />)
   }
}
let mapStateToProps = (state) => ({
   email: state.authReducer.email,
   login: state.authReducer.login,
   img: state.authReducer.img,
   id: state.authReducer.id,
   NewProcedure: state.NewProcedureReducer.NewProcedure.CartProcedure,
   TotalPrice: state.NewProcedureReducer.NewProcedure.Price,
   isAuth: state.authReducer.isAuth,
   MyProcedure: state.NewProcedureReducer.NewProcedure.MyProcedure,
});
export default compose(
   connect(mapStateToProps),
   withAuthRedirect,
)
   (MyProfileProcedureConteiner)