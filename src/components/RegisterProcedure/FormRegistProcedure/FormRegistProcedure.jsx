import s from './RegisterProcedure.module.css'
import React from 'react';
import { reduxForm, Field } from 'redux-form';

const FormRegistProcedure = (props) => {
  const options = props.PricNavbarDate;
  const ProcedureNames = props.ProcedureNames;
  const onSubmit = (formData) => {
    props.AddNewProcedureCart(formData);
  };
  return (
    <AddProcedureReduxForm options={options} ProcedureNames={ProcedureNames} onSubmit={onSubmit} />
  );
};

const AddNewProcedureForm = (props) => {
  return (
    <form className={s.formcontentright} onSubmit={props.handleSubmit}>
      <div className={s.form} noValidate>
        <div className={s.forminputs}>
          <label className={s.formlabel}>ProcedureClass</label>
          <Field placeholder={"ProcedureClass"} name={"ProcedureClass"} component={"select"}>
            {props.options.map((option) => (
              <option onClick={() => props.UpdateProcedureNames(option.id)} value={option.name} > {option.name}  </option>
            ))}
          </Field>
        </div>
        <div className={s.forminputs}>
          <label className={s.formlabel}>ProcedureName</label>
          <Field placeholder={"ProcedureName"} name={"ProcedureName"} component={"select"}>
            {props.options.map((E) => (
              <option value={E.Procedure}>{E.Procedure}</option>
            ))}
          </Field>
        </div>
        <div className={s.forminputs}>
          <label for="meeting-time" className={s.formlabel}>ProcedureTime</label>
          <Field className={s.forminput}
            type={"datetime-local"}
            id={"meeting-time"}
            placeholder={"ProcedureTime"}
            component={"input"}
            name={"ProcedureTime"}
          />
        </div>
        <div className={s.forminputs}>
          <label className={s.formlabel}>Price</label>
          <Field
            placeholder={"Price"}
            component={"input"}
            name={"Price"}
            className={s.forminput}
            type={"Number"}
          />
        </div>
        <button className={s.forminputbtn}>
          Next
        </button>
        <span className={s.forminputNext}>
          We wish you beauty<a href='#'>here</a>
        </span>
      </div>
    </form >
  );
};
const AddProcedureReduxForm = reduxForm({ form: 'NewProcedure' })(AddNewProcedureForm);

export default FormRegistProcedure;