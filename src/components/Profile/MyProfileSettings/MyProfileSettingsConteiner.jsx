import React from 'react';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';
import MyProfileSettings from './MyProfileSettings';
class MyProfileSettingsConteiner extends React.Component {
   componentDidMount() {
   }
   render() {
      return (<MyProfileSettings {...this.props} />)
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
});
export default compose(
   connect(mapStateToProps),
   withAuthRedirect,
)
   (MyProfileSettingsConteiner)