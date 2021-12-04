import React from 'react';
import { addProcedureActionCreator,UpdateNameActionCreator,UpdateSurnameActionCreator, UpdateEmailActionCreator,UpdateProcedureNameActionCreator,UpdateProcedureCassActionCreator,UpdateNumberActionCreator,UpdateGenderActionCreator} from '../../../redux/NewProcedure-reducer';
import FormRegist from './FormRegist'
import {connect} from 'react-redux'
 
  let mapStateToProps=(state) =>{
    debugger;
    return{
      NewElementProcedureName: state.NewProcedurereducer.NewProcedure.NewElementProcedureName,
      NewElementProcedureClass: state.NewProcedurereducer.NewProcedure.NewElementProcedureClass,
      NewElementGender: state.NewProcedurereducer.NewProcedure.NewElementGender,
      NewElementName: state.NewProcedurereducer.NewProcedure.NewElementName,
      NewElementSurname: state.NewProcedurereducer.NewProcedure.NewElementSurname,
      NewElementEmail: state.NewProcedurereducer.NewProcedure.NewElementEmail,
      NewElementNumber: state.NewProcedurereducer.NewProcedure.NewElementNumber,
  }
  }
  let mapDispatchToProps=(dispatch) =>{
  return{
    UpdateNewName:(Name)=>{
      let  action=UpdateNameActionCreator(Name)
      dispatch(action);
    },
    UpdateNewSurname:(Surname)=>{
      let  action=UpdateSurnameActionCreator(Surname)
      dispatch(action);  
    },
    UpdateNewEmail:(Email)=>{
      let  action=UpdateEmailActionCreator(Email)
      dispatch(action);  
    },
    UpdateNewProcedureName:(ProcedureName)=>{
      let  action=UpdateProcedureNameActionCreator(ProcedureName)
      dispatch(action);  
    },
    UpdateNewProcedureClass:(ProcedureClass)=>{
      let  action= UpdateProcedureCassActionCreator(ProcedureClass)
      dispatch(action);  
    } ,
    UpdateNewNumber:(Number)=>{
      let  action= UpdateNumberActionCreator(Number)
      dispatch(action);  
    },
    UpdateNewGender:(Gender)=>{
      let  action=UpdateGenderActionCreator(Gender)
      dispatch(action);  
    },
    AddNewProcedure:()=>{
      dispatch(addProcedureActionCreator());
    },
  }
  }
  const FormRegistConteiner=connect(mapStateToProps,mapDispatchToProps)(FormRegist)
  export default FormRegistConteiner;