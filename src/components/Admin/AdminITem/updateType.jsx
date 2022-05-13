import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { UpdateProcedureType } from '../../../redux/App-reducer';
import { getType } from '../../../selectors/Procedure-selectors';


const TypeForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <h1>ტიპის განახლება</h1>
         <div >
            <label >აირჩიე ტიპი</label>
            <Field
               type={"number"}
               placeholder={"id"}
               component={'select'}
               name={"id"}
            >
               {props.type.map((K) => (
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
const TypeReduxForm = reduxForm({ form: 'updateType' })(TypeForm)
const UpdateType = (props) => {
   const onSubmit = (ClassData) => {
      props.UpdateProcedureType(ClassData);
   }
   return (<TypeReduxForm type={props.type} onSubmit={onSubmit} />
   )
}
const mapStateToProps = (state) => ({
   type: getType(state)
})
export default connect(mapStateToProps, { UpdateProcedureType })(UpdateType);
