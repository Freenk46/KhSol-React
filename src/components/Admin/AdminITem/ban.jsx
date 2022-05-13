import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { UserBan } from '../../../redux/Users-reducer';


const BanForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <h1 >ბლოკირება</h1>
         <div >
            <label >ბლოკირების  მიზეზი</label>
            <Field
               placeholder={"BanReason"}
               component={'input'}
               name={"BanReason"}
            />
         </div>
         <button >
            დაბლოკვა
         </button>
      </form >
   );
};
const BanReduxForm = reduxForm({ form: 'ban' })(BanForm)
const AddBan = (props) => {
   const onSubmit = (typeData) => {
      props.UserBan(typeData.BanReason, props.user.id);

   }
   return (<BanReduxForm onSubmit={onSubmit} />
   )
}
const mapStateToProps = (state) => ({

})
export default connect(mapStateToProps, { UserBan })(AddBan);
