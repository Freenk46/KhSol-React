
import ContentBlock from './ContetBlock';
import { connect } from 'react-redux'
import { AddNewProcedureCart, } from '../../redux/NewProcedure-reducer';
let mapStateToProps = (state) => {

  return {
    PathMen: state.LaserHairRemovalreducer.LaserHairRemoval.PathMen,
    PathWomen: state.LaserHairRemovalreducer.LaserHairRemoval.PathWomen,
    LHRPricNavbarDate: state.LaserHairRemovalreducer.LaserHairRemoval.PricNavbarData,
    MostPopularProcedurePric: state.LaserHairRemovalreducer.LaserHairRemoval.MostPopular,
    UpperBodyProcedurePric: state.LaserHairRemovalreducer.LaserHairRemoval.UpperBody,
    FaceNeckProcedurePric: state.LaserHairRemovalreducer.LaserHairRemoval.FaceNeck,
    LowerBodyProcedurePric: state.LaserHairRemovalreducer.LaserHairRemoval.LowerBody,
    FullBodyProcedurePric: state.LaserHairRemovalreducer.LaserHairRemoval.FullBody,
    text1: state.LaserHairRemovalreducer.LaserHairRemoval.InformationNet.text1,
    text2: state.LaserHairRemovalreducer.LaserHairRemoval.InformationNet.text2,
    text3: state.LaserHairRemovalreducer.LaserHairRemoval.InformationNet.text3,
    text4: state.LaserHairRemovalreducer.LaserHairRemoval.InformationNet.text4,
    Wimg1: state.LaserHairRemovalreducer.LaserHairRemoval.InformationNet.Wimg1,
    Wimg2: state.LaserHairRemovalreducer.LaserHairRemoval.InformationNet.Wimg2,
    Wimg3: state.LaserHairRemovalreducer.LaserHairRemoval.InformationNet.Wimg3,
    Mimg1: state.LaserHairRemovalreducer.LaserHairRemoval.InformationNet.Mimg1,
    Mimg2: state.LaserHairRemovalreducer.LaserHairRemoval.InformationNet.Mimg2,
    Mimg3: state.LaserHairRemovalreducer.LaserHairRemoval.InformationNet.Mimg3,
  }
}

const ContentBlockConteiner = connect(mapStateToProps,
  AddNewProcedureCart,
)(ContentBlock)
export default ContentBlockConteiner;