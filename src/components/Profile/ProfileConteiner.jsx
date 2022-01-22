import React from 'react';
import Profile from './Profile'
import { connect } from 'react-redux'
import { useMatch } from "react-router-dom";
import { getUsersProfileThunk } from '../../../src/redux/Profile-reducer';
class ProfileConteiner extends React.Component {

   componentDidMount() {

      let userId = this.props.match.params.userId;
      if (userId === null) {
         userId = 1;
      }
      this.props.getUsersProfileThunk(userId);

   }
   render() {


      return (<Profile {...this.props} NewProcedure={this.props.NewProcedure} Profile={this.props.Profile} />)
   }
}

let mapStateToProps = (state) => ({
   Profile: state.ProfileReducer.Profile,
   id: state.authReducer.id,
   NewProcedure: state.NewProcedureReducer.NewProcedure.ProcedureLaserHairRemoval,


});
const ProfileMatch = (props) => {
   let match = useMatch("/profile/:userId/");
   return (
      <ProfileConteiner {...props} match={match} />
   )
}
export default connect(mapStateToProps, { getUsersProfileThunk })(ProfileMatch);