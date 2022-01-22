import React from 'react';
import MyProfile from './MyProfile'
import { connect } from 'react-redux'
class MyProfileConteiner extends React.Component {
   componentDidMount() {
   }
   render() {
      debugger;
      return (<MyProfile {...this.props} />)
   }
}
let mapStateToProps = (state) => ({
   email: state.authReducer.email,
   login: state.authReducer.login,
   id: state.authReducer.id,
   NewProcedure: state.NewProcedureReducer.NewProcedure.ProcedureLaserHairRemoval,
});
export default connect(mapStateToProps,)(MyProfileConteiner)