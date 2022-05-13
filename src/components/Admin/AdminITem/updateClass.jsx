import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { UpdateProcedureClass } from '../../../redux/App-reducer';
import { getClass } from '../../../selectors/Procedure-selectors';


const ClassForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <h1>კატეგორიის განახლება</h1>
         <div >
            <label >აირჩიე კატეგორია</label>
            <Field
               type={"number"}
               placeholder={"id"}
               component={'select'}
               name={"id"}
            >
               {props.class.map((K) => (
                  <option key={K.id} value={K.id}>{K.name}</option>
               ))}
            </Field>
         </div>
         <div >
            <label >კატეგორიის ახალი სახელი</label>
            <Field
               placeholder={"name"}
               component={'input'}
               name={"name"}
            />
         </div>
         <button >
            განახლება
         </button>
      </form >
   );
};
const ClassReduxForm = reduxForm({ form: 'updateClass' })(ClassForm)
const UpdateClass = (props) => {
   const onSubmit = (ClassData) => {
      props.UpdateProcedureClass(ClassData);
   }
   return (<ClassReduxForm class={props.class} onSubmit={onSubmit} />
   )
}
const mapStateToProps = (state) => ({
   class: getClass(state)
})
export default connect(mapStateToProps, { UpdateProcedureClass })(UpdateClass);
