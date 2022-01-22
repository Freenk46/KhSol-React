import React from 'react';
import { AddNewProcedureCart } from '../../../redux/NewProcedure-reducer';
import { UpdateProcedureNames } from '../../../redux/SkinTreatments-reducer';
import FormRegistProcedure from './FormRegistProcedure'
import { connect } from 'react-redux'
import { compose } from 'redux';


class FormRegistConteiner extends React.Component {

  componentDidMount() {
  }
  render() {

    return (<FormRegistProcedure {...this.props} />)
  }
}

let mapStateToProps = (state) => ({
  PricNavbarDate: state.SkinTreatmentsreducer.SkinTreatments.PricNavbarDate,
  ProcedureNames: state.SkinTreatmentsreducer.SkinTreatments.ProcedureNames,
});
export default compose(
  connect(mapStateToProps,
    {
      AddNewProcedureCart,
      UpdateProcedureNames,
    }
  ),
)
  (FormRegistConteiner);