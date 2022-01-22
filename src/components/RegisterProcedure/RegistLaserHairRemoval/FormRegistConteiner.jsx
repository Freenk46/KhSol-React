import React from 'react';
import { AddNewProcedure, UpdateNewName, UpdateNewSurname, UpdateNewEmail, UpdateNewProcedureName, UpdateNewProcedureClass, UpdateNewNumber, UpdateNewGender } from '../../../redux/NewProcedure-reducer';
import FormRegist from './FormRegist'
import { connect } from 'react-redux'


class FormRegistConteiner extends React.Component {
  componentDidMount() {
  }
  render() {
    return (<FormRegist {...this.props} />)
  }
}
let mapStateToProps = (state) => {
  return {
    NewElementProcedureName: state.NewProcedureReducer.NewProcedure.NewElementProcedureName,
    NewElementProcedureClass: state.NewProcedureReducer.NewProcedure.NewElementProcedureClass,
    NewElementGender: state.NewProcedureReducer.NewProcedure.NewElementGender,
    NewElementName: state.NewProcedureReducer.NewProcedure.NewElementName,
    NewElementSurname: state.NewProcedureReducer.NewProcedure.NewElementSurname,
    NewElementEmail: state.NewProcedureReducer.NewProcedure.NewElementEmail,
    NewElementNumber: state.NewProcedureReducer.NewProcedure.NewElementNumber,
    NewProcedure: state.NewProcedureReducer.NewProcedure.ProcedureLaserHairRemoval,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    UpdateNewName: (Name) => {
      dispatch(UpdateNewName(Name));
    },
    UpdateNewSurname: (Surname) => {
      dispatch(UpdateNewSurname(Surname));
    },
    UpdateNewEmail: (Email) => {

      dispatch(UpdateNewEmail(Email));
    },
    UpdateNewProcedureName: (ProcedureName) => {

      dispatch(UpdateNewProcedureName(ProcedureName));
    },
    UpdateNewProcedureClass: (ProcedureClass) => {
      dispatch(UpdateNewProcedureClass(ProcedureClass));
    },
    UpdateNewNumber: (Number) => {

      dispatch(UpdateNewNumber(Number));
    },
    UpdateNewGender: (Gender) => {

      dispatch(UpdateNewGender(Gender));
    },
    AddNewProcedure: () => {
      dispatch(AddNewProcedure());
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormRegistConteiner);
