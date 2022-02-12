
import ContentBlock from './ContetBlock';
import { connect } from 'react-redux'
import { AddNewProcedureCart, } from '../../redux/Procedure-reducer';
let mapStateToProps = (state) => {

  return {

  }
}

const ContentBlockConteiner = connect(mapStateToProps,
  AddNewProcedureCart,
)(ContentBlock)
export default ContentBlockConteiner;