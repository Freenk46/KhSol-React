import React from 'react';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';
import MyProfileCart from './MyProfileCart';
import { DelNewProcedureCart, ChangeNewId, BayNewProcedure } from '../../../redux/NewProcedure-reducer';
import { getemail, getlogin, getid, getisAuth } from '../../../selectors/auth-selectors'
import { getCartProcedure, getTotalpriceCart } from '../../../selectors/NewProcedure-selectors'
class MyProfileCartConteiner extends React.Component {
   componentDidMount() {


   }
   render() {
      return (<MyProfileCart  {...this.props} />)
   }
}

let mapStateToProps = (state) => ({
   email: getemail(state),
   login: getlogin(state),
   img: state.authReducer.img,
   id: getid(state),
   CartProcedure: getCartProcedure(state),
   TotalPrice: getTotalpriceCart(state),
   isAuth: getisAuth(state),
});

export default compose(
   connect(mapStateToProps,
      {
         DelNewProcedureCart,
         ChangeNewId,
         BayNewProcedure,
      }

   ),
   withAuthRedirect,
)
   (MyProfileCartConteiner)