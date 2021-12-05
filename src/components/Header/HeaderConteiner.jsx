import Header from './Header'
import {connect} from 'react-redux'
  let mapStateToProps=(state) =>{
    return{
      HeaderNavbarDate: state.ManePagereducer.ManePage.HNbD
     }
  }
  let mapDispatchToProps=(dispatch) =>{
  return{
   
 
  }
  }
  const HeaderConteiner=connect(mapStateToProps,mapDispatchToProps)(Header)
  export default HeaderConteiner;