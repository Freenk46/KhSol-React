import React from 'react';
import BottomMenu from './BottomMenu'
import { connect } from 'react-redux'
import { getNbD, getHNbD } from '../../selectors/App-selectors'
let mapStateToProps = (state) => {
  return {
    NavbarDate: getNbD(state),
    HeaderNavbarDate: getHNbD(state)
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
  }
}
const BottomMenuConteiner = connect(mapStateToProps, mapDispatchToProps)(BottomMenu)
export default BottomMenuConteiner;