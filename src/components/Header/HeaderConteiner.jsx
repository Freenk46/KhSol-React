import Header from './Header'
import React from 'react';
import { connect } from 'react-redux'
import { logout } from '../../redux/auth-reducer';


class HeaderConteiner extends React.Component {
  componentDidMount() {

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
    Id: state.NewProcedureReducer.NewProcedure.id,
    TotalPrice: state.NewProcedureReducer.NewProcedure.Price,
  }
}


export default connect(mapStateToProps, { logout })(HeaderConteiner)