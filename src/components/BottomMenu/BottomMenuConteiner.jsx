import React from 'react';
import BottomMenu from './BottomMenu'
import {connect} from 'react-redux'
 
  let mapStateToProps=(state) =>{
    return{
        NavbarDate: state.ManePagereducer.ManePage.NbD,
        HeaderNavbarDate : state.ManePagereducer.ManePage.HNbD
     }
  }
  let mapDispatchToProps=(dispatch) =>{
  return{
  }
  }
  const BottomMenuConteiner=connect(mapStateToProps,mapDispatchToProps)(BottomMenu)
  export default BottomMenuConteiner;