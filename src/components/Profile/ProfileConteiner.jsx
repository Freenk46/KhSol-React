import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { useMatch } from "react-router-dom";
import { getUserThunk, getUserBasket } from '../../../src/redux/Users-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Profile from './Profile';
import { getisAuth } from '../../selectors/auth-selectors'
import { getinitialized } from '../../selectors/App-selectors'
import { getBasket, getRoles, getUser } from '../../selectors/Users-selectors'
import { getClass, getType } from '../../selectors/Procedure-selectors';

class ProfileConteiner extends PureComponent {
   componentDidMount() {
      let userId = this.props.match.params.userId;
      let basketId = userId
      this.props.getUserBasket(basketId);
      this.props.getUserThunk(userId);
   }
   componentDidUpdate(prevProps, prevState, snapshot) {
      let userId = this.props.match.params.userId;
      if (this.props.match.params.userId != prevProps.match.params.userId) {
         this.props.getUserThunk(userId);

      }
   }
   render() {
      return (<Profile {...this.props} UpdateProfileStatus={this.props.UpdateProfileStatus} />)
   }
}
let mapStateToProps = (state) => ({
   user: getUser(state),
   isAuth: getisAuth(state),
   initialized: getinitialized(state),
   roles: getRoles(state),
   basket: getBasket(state),
   class: getClass(state),
   type: getType(state)
});
const ProfileMatch = (props) => {
   let match = useMatch("/user/:userId/");
   return (
      <ProfileConteiner {...props} match={match} />
   )
}
const authRedirectComponent = withAuthRedirect(ProfileMatch);

export default connect(mapStateToProps, { getUserThunk, getUserBasket })(authRedirectComponent);