import React from 'react';

import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { CreateRole } from '../../../redux/App-reducer';


const RoleForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <h1 > როლის დამატება</h1>
         <div >
            <label >როლის სახელი</label>
            <Field
               placeholder={"value"}
               component={'input'}
               name={"value"}
            />
         </div>
         <div >
            <label >როლის აღწერა</label>
            <Field
               placeholder={"description"}
               component={'input'}
               name={"description"}
            />
         </div>
         <button >
            დამატება
         </button>
      </form >
   );
};
const RoleReduxForm = reduxForm({ form: 'role' })(RoleForm)
const AddRole = (props) => {
   const onSubmit = (RoleData) => {
      props.CreateRole(RoleData);

   }
   return (<RoleReduxForm onSubmit={onSubmit} />
   )
}
const mapStateToProps = (state) => ({

})
export default connect(mapStateToProps, { CreateRole })(AddRole);
