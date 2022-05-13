import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { AddProcedureClass } from '../../../redux/App-reducer';


const ClassForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <h1>კატეგორიის დამატება</h1>
         <div >
            <label >კატეგორიის სახელი</label>
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
const ClassReduxForm = reduxForm({ form: 'class' })(ClassForm)
const AddClass = (props) => {
   const onSubmit = (ClassData) => {
      props.AddProcedureClass(ClassData);
   }
   return (<ClassReduxForm onSubmit={onSubmit} />
   )
}
const mapStateToProps = (state) => ({

})
export default connect(mapStateToProps, { AddProcedureClass })(AddClass);
