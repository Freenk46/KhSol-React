import s from './RegistLaserHairRemoval.module.css'
import React from 'react';
import Procedures from '../../Profile/Procedures';

const FormRegist = (props) => {

  let ElementName = React.createRef();
  let ElementSurname = React.createRef();
  let ElementEmail = React.createRef();
  let ElementProcedureName = React.createRef();
  let ElementProcedureClass = React.createRef();
  let ElementNumber = React.createRef();
  let ElementGender = React.createRef();
  let addProcedure = () => {
    props.AddNewProcedure();
  }
  let onNamechange = (ElementName) => {

    let Name = ElementName.target.value;
    props.UpdateNewName(Name);
  }
  let onSurnamechange = (ElementSurname) => {
    let Surname = ElementSurname.target.value;
    props.UpdateNewSurname(Surname);
  }
  let onEmailchange = (ElementEmail) => {
    let Email = ElementEmail.target.value;
    props.UpdateNewEmail(Email);
  }
  let onProcedureNamechange = (ElementProcedureName) => {
    let ProcedureName = ElementProcedureName.target.value;
    props.UpdateNewProcedureName(ProcedureName);
  }
  let onProcedureClasschange = (ElementProcedureClass) => {
    let ProcedureClass = ElementProcedureClass.target.value;
    props.UpdateNewProcedureClass(ProcedureClass);
  }
  let onNumberchange = (ElementNumber) => {
    let Number = ElementNumber.target.value;
    props.UpdateNewNumber(Number);
  }
  let onGenderchange = (ElementGender) => {
    let Gender = ElementGender.target.value;
    props.UpdateNewGender(Gender);
  }
  return (

    <div className={s.formcontentright}>
      <div className={s.form} noValidate>
        <div className={s.forminputs}>
          <label className={s.formlabel}>Name</label>
          <input
            onChange={onNamechange}
            value={props.NewElementName}
            ref={ElementName}
            className={s.forminput}
            name='Name'
          />
        </div>
        <div className={s.forminputs}>
          <label className={s.formlabel}>Surname</label>
          <input
            onChange={onSurnamechange}
            value={props.NewElementSurname}
            ref={ElementSurname}
            className={s.forminput}

            name='Surname'
          />
        </div>
        <div className={s.forminputs}>
          <label className={s.formlabel}>Email</label>
          <input
            onChange={onEmailchange}
            value={props.NewElementEmail}
            ref={ElementEmail}
            className={s.forminput}

            name='Email'
          />
        </div>
        <div className={s.forminputs}>
          <label className={s.formlabel}>ProcedureName</label>
          <input
            onChange={onProcedureNamechange}
            value={props.NewElementProcedureName}
            ref={ElementProcedureName}
            className={s.forminput}
            name='ProcedureName'
          />
        </div>
        <div className={s.forminputs}>
          <label className={s.formlabel}>ProcedureClass</label>
          <input
            onChange={onProcedureClasschange}
            value={props.NewElementProcedureClass}
            ref={ElementProcedureClass}
            className={s.forminput}
            name='ProcedureClass'
          />
        </div>
        <div className={s.forminputs}>
          <label className={s.formlabel}>Number</label>
          <input
            onChange={onNumberchange}
            value={props.NewElementNumber}
            ref={ElementNumber}
            className={s.forminput}
            name='Number'
          />
        </div>
        <div className={s.forminputs}>
          <label className={s.formlabel}>Gender</label>
          <input
            onChange={onGenderchange}
            value={props.NewElementGender}
            ref={ElementGender}
            className={s.forminput}
            name='Gender'
          />
        </div>
        <button onClick={addProcedure} className={s.forminputbtn}>
          Next
        </button>
        <span className={s.forminputNext}>
          We wish you beauty<a href='#'>here</a>
        </span>
      </div>
    </div>
  );
};

export default FormRegist;