import React from 'react';

import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { AddProcedureType } from '../../../redux/App-reducer';


const TypeForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <h1 > ტიპის დამატება</h1>
         <div >
            <label >ტიპის სახელი</label>
            <Field

               placeholder={"name"}
               component={'input'}
               name={"name"}
            />
         </div>
         <button >
            დამატება
         </button>
      </form >
   );
};
const TypeReduxForm = reduxForm({ form: 'type' })(TypeForm)
const AddPType = (props) => {
   const onSubmit = (typeData) => {
      props.AddProcedureType(typeData);

   }
   return (<TypeReduxForm onSubmit={onSubmit} />
   )
}
const mapStateToProps = (state) => ({

})
export default connect(mapStateToProps, { AddProcedureType })(AddPType);
