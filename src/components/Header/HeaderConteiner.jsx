import Header from './Header'
import React from 'react';
import { connect } from 'react-redux'
import { logout } from '../../redux/auth-reducer';
import { getMyProfileThunk } from '../../redux/Profile-reducer';
import { getlogin, getisAuth, getid } from '../../selectors/auth-selectors'
import { getTotalpriceCart, getQuantityCart } from '../../selectors/Procedure-selectors'
import { getProfile } from '../../selectors/Profile-selectors'
import { getHNbD } from '../../selectors/App-selectors'

class HeaderConteiner extends React.Component {
  componentDidMount() {
  }
  render() {
    return <Header {...this.props} />
  }
}
let mapStateToProps = (state) => {
  return {
    HeaderNavbarDate: getHNbD(state),
    Profile: getProfile(state),
    isAuth: getisAuth(state),
    login: getlogin(state),
    Id: getQuantityCart(state),
    id: getid(state),
    TotalPrice: getTotalpriceCart(state),
  }
}


export default connect(mapStateToProps, { logout, getMyProfileThunk })(HeaderConteiner)