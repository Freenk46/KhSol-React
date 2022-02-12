import React, { PureComponent } from 'react';
import { AddNewProcedureCart } from '../../../redux/Procedure-reducer';
import FormRegistProcedure from './FormRegistProcedure'
import { connect } from 'react-redux'
import { compose } from 'redux';
import { } from '../../../selectors/SkinTreatments-selectors'
class FormRegistConteiner extends PureComponent {

  componentDidMount() {
  }
  render() {

    return (<FormRegistProcedure {...this.props} />)
  }
}

let mapStateToProps = (state) => ({


});
export default compose(
  connect(mapStateToProps,
    {
      AddNewProcedureCart,
    }
  ),
)
  (FormRegistConteiner);