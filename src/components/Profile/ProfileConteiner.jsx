import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { useMatch } from "react-router-dom";
import { getUsersProfileThunk } from '../../../src/redux/Users-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Profile from './Profile';
import { getid, getisAuth } from '../../selectors/auth-selectors'
import { getinitialized } from '../../selectors/App-selectors'
import { getUsersProfile } from '../../selectors/Users-selectors'

class ProfileConteiner extends PureComponent {
   componentDidMount() {
      let userId = this.props.match.params.userId;
      this.props.getUsersProfileThunk(userId);
   }
   componentDidUpdate(prevProps, prevState, snapshot) {
      let userId = this.props.match.params.userId;
      if (this.props.match.params.userId != prevProps.match.params.userId) {
         this.props.getUsersProfileThunk(userId);
      }
   }
   render() {
      return (<Profile {...this.props} UpdateProfileStatus={this.props.UpdateProfileStatus} />)
   }
}
let mapStateToProps = (state) => ({
   Profile: getUsersProfile(state),
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