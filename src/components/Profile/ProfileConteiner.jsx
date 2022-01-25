import React from 'react';
import { connect } from 'react-redux'
import { useMatch } from "react-router-dom";
import { getUsersProfileThunk } from '../../../src/redux/Profile-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Profile from './Profile';
import { getid, getisAuth } from '../../selectors/auth-selectors'
import { getProfile } from '../../selectors/Profile-selectors'
import { getinitialized } from '../../selectors/App-selectors'

class ProfileConteiner extends React.Component {

   componentDidMount() {

      let userId = this.props.match.params.userId;
      let initialized = this.props.match.params.initialized;
      if (!userId) {
         userId = this.props.id;
         if (!userId) {
            this.props.history.push("/login");
         }
      }

      this.props.getUsersProfileThunk(userId);

   }
   render() {


      return (<Profile {...this.props} />)
   }
}
let mapStateToProps = (state) => ({
   Profile: getProfile(state),
   id: getid(state),
   isAuth: getisAuth(state),
   initialized: getinitialized(state),

});
const ProfileMatch = (props) => {
   let match = useMatch("/profile/:userId/");
   return (
      <ProfileConteiner {...props} match={match} />
   )
}
const authRedirectComponent = withAuthRedirect(ProfileMatch);

export default connect(mapStateToProps, { getUsersProfileThunk })(authRedirectComponent);