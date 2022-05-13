import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { addUserRole } from '../../../redux/Users-reducer';


const UserRoleForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <h1 > როლის მინიჭება როლი</h1>
         <div >
            <label >აირჩიეთ როლი</label>
            <Field
               placeholder={"value"}
               component={'select'}
               name={"value"}
            >
               {props.roles.map((E) => (
                  <option key={E.id} value={E.value}>{E.description}</option>
               ))}
            </Field>

         </div>
         <button >
            დამატება
         </button>
      </form >
   );
};
const UserRoleReduxForm = reduxForm({ form: 'UserRole' })(UserRoleForm)
const UserRole = (props) => {
   const onSubmit = (RoleData) => {

      props.addUserRole(RoleData.value, props.user.id);


   }
   return (<UserRoleReduxForm roles={props.roles} onSubmit={onSubmit} />
   )
}
const mapStateToProps = (state) => ({



})
export default connect(mapStateToProps, { addUserRole })(UserRole);
