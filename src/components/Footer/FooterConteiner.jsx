import React from 'react';
import Footer from './Footer'
import { connect } from 'react-redux'
import { getNbD, getHNbD, getFND } from '../../selectors/App-selectors'
let mapStateToProps = (state) => {
  return {
    NavbarDate: getNbD(state),
    HeaderNavbarDate: getHNbD(state),
    FND: getFND(state),
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
  }
}
const FooterConteiner = connect(mapStateToProps, mapDispatchToProps)(Footer)
export default FooterConteiner;