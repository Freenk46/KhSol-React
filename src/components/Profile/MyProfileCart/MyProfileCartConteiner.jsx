import React from 'react';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';
import MyProfileCart from './MyProfileCart';
import { DelNewProcedureCart, ChangeNewId, BayNewProcedure } from '../../../redux/NewProcedure-reducer';
class MyProfileCartConteiner extends React.Component {
   componentDidMount() {


   }
   render() {
      return (<MyProfileCart  {...this.props} />)
   }
}

let mapStateToProps = (state) => ({
   email: state.authReducer.email,
   login: state.authReducer.login,
   img: state.authReducer.img,
   id: state.authReducer.id,
   NewProcedure: state.NewProcedureReducer.NewProcedure.CartProcedure,
   TotalPrice: state.NewProcedureReducer.NewProcedure.Price,
   isAuth: state.authReducer.isAuth,
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