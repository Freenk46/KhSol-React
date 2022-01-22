import React from 'react';
import { connect } from 'react-redux'
import { useMatch } from "react-router-dom";
import { getUsersProfileThunk } from '../../../src/redux/Profile-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Profile from './Profile';

class ProfileConteiner extends React.Component {

   componentDidMount() {

      let userId = this.props.match.params.userId;
      if (!userId) {
         userId = this.props.id;
      }
      if (!userId) {
         this.props.history.push("/login");
      }
      this.props.getUsersProfileThunk(userId);

   }
   render() {


      return (<Profile {...this.props} />)
   }
}
let mapStateToProps = (state) => ({
   Profile: state.ProfileReducer.Profile,
   id: state.authReducer.id,
   NewProcedure: state.NewProcedureReducer.NewProcedure.ProcedureLaserHairRemoval,
   isAuth: state.authReducer.isAuth,
   initialized: state.AppReducer.initialized,

});
const ProfileMatch = (props) => {
   let match = useMatch("/profile/:userId/");
   return (
      <ProfileConteiner {...props} match={match} />
   )
}
const authRedirectComponent = withAuthRedirect(ProfileMatch);

export default connect(mapStateToProps, { getUsersProfileThunk })(authRedirectComponent);