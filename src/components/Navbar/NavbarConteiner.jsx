import React from 'react';
import Navbar from './Navbar'
import { connect } from 'react-redux'
import { getNbD } from '../../selectors/App-selectors'
let mapStateToProps = (state) => {
  return {
    NavbarDate: getNbD(state)
  }
}
let mapDispatchToProps = (dispatch) => {
  return {


  }
}
const NavbarConteiner = connect(mapStateToProps, mapDispatchToProps)(Navbar)
export default NavbarConteiner;