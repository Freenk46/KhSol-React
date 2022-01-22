import Header from './Header'
import React from 'react';
import { connect } from 'react-redux'
import { getAuthUsersDataThunk } from '../../../src/redux/auth-reducer';


class HeaderConteiner extends React.Component {
  componentDidMount() {
    this.props.getAuthUsersDataThunk();
  }
  render() {
    return <Header {...this.props} />
  }


}
let mapStateToProps = (state) => {
  return {
    HeaderNavbarDate: state.ManePagereducer.ManePage.HNbD,
    Profile: state.ProfileReducer.Profile,
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login,
    Id: state.NewProcedureReducer.NewProcedure.id
  }
}


export default connect(mapStateToProps, { getAuthUsersDataThunk })(HeaderConteiner)