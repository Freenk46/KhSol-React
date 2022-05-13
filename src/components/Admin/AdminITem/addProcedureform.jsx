import React from 'react';

import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { getType, getClass, getProcedure } from '../../../selectors/Procedure-selectors';
import { addProcedure, updateProcedure } from '../../../redux/App-reducer';
var Edit = false
const isEdit = () => {
   Edit = true
}
const ProcedureForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
         <h1 > პროცედურის დამატება</h1>
         <div >
            <label>აირჩიე პროცედურა თუ განახლება გსურს</label>
            <Field
               onClick={isEdit}
               type={"number"}
               placeholder={"id"}
               component={'select'}
               name={"id"}
            >
               {props.procedure.map((E) => (
                  <option key={E.id} value={E.id}>{E.name}</option>
               ))}
            </Field>

         </div>
         <div >
            <label >პროცედურის სახელი</label>
            <Field

               placeholder={"name"}
               component={'input'}
               name={"name"}
            />
         </div>
         <div>
            <label >ხანგრზლივობა</label>
            <Field
               placeholder={"duration"}
               component={'input'}
               name={"duration"}
               type={"number"}
            />
         </div>
         <div >
            <label >ფასი</label>
            <Field
               type={"number"}
               placeholder={"price"}
               component={'input'}
               name={"price"}
            />
         </div>
         <div >
            <label >ინფორმაცია</label>
            <Field

               placeholder={"info"}
               component={'input'}
               name={"info"}
            />
         </div>
         <div >
            <label >სქესი</label>
            <Field

               placeholder={"info"}
               component={'select'}
               name={"info"}
            >

            </Field>
         </div>
         <div >
            <label>პროცედურის ტიპი</label>
            <Field
               type={"number"}
               placeholder={"typeId"}
               component={'select'}
               name={"typeId"}
            >
               {props.types.map((E) => (
                  <option key={E.id} value={E.id}>{E.name}</option>
               ))}
            </Field>

         </div>
         <div >
            <label >პროცედურის კატეგორია</label>
            <Field
               type={"number"}
               placeholder={"classId"}
               component={'select'}
               name={"classId"}
            >
               {props.class.map((K) => (
                  <option key={K.id} value={K.id}>{K.name}</option>
               ))}
            </Field>
         </div>
         <button >
            {Edit ? 'განახლება'
               : 'დამატება'}
         </button>



      </form >
   );
};
const ProcedureReduxForm = reduxForm({ form: 'procedure' })(ProcedureForm)
const AddProcedure = (props) => {
   const onSubmit = (ProcedureData) => {
      if (!ProcedureData.id) {
         props.addProcedure(ProcedureData);
      } else
         props.updateProcedure(ProcedureData)

   }
   return (<ProcedureReduxForm procedure={props.procedure} class={props.class} types={props.types} onSubmit={onSubmit} />
   )
}
const mapStateToProps = (state) => ({
   class: getClass(state),
   types: getType(state),
   procedure: getProcedure(state)

})
export default connect(mapStateToProps, { addProcedure, updateProcedure })(AddProcedure);
