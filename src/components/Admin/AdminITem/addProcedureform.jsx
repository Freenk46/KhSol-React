import React from 'react';

import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { getType, getClass } from '../../../selectors/Procedure-selectors';
import { addProcedure } from '../../../redux/App-reducer';


const ProcedureForm = (props) => {
   return (
      <form onSubmit={props.handleSubmit}>
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
            დამატება
         </button>
      </form >
   );
};
const ProcedureReduxForm = reduxForm({ form: 'procedure' })(ProcedureForm)
const AddProcedure = (props) => {
   const onSubmit = (ProceduData) => {
      debugger;
      props.addProcedure(ProceduData);
   }
   return (<ProcedureReduxForm class={props.class} types={props.types} onSubmit={onSubmit} />
   )
}
const mapStateToProps = (state) => ({
   class: getClass(state),
   types: getType(state)

})
export default connect(mapStateToProps, { addProcedure })(AddProcedure);
