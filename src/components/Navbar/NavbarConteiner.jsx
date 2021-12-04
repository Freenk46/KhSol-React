import React from 'react';
import Navbar from './Navbar'
import {connect} from 'react-redux'
 
  let mapStateToProps=(state) =>{
    return{
        NavbarDate: state.ManePagereducer.ManePage.NbD
     }
  }
  let mapDispatchToProps=(dispatch) =>{
  return{
   
 
  }
  }
  const NavbarConteiner=connect(mapStateToProps,mapDispatchToProps)(Navbar)
  export default NavbarConteiner;