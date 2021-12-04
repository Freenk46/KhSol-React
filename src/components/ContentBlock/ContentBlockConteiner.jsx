import React from 'react';
import ContentBlock from './ContetBlock';
import {connect} from 'react-redux'
import { followAC, unfollowAC } from '../../redux/SkinTreatments-reducer';
 
  let mapStateToProps=(state) =>{
    return{
        PathMen:state.LaserHairRemovalreducer.LaserHairRemoval.PathMen,
        PathWomen:state.LaserHairRemovalreducer.LaserHairRemoval.PathWomen,
        LHRPricNavbarDate:state.LaserHairRemovalreducer.LaserHairRemoval.PricNavbarDate,
        MostPopularProcedurePric:state.LaserHairRemovalreducer.LaserHairRemoval.MostPopularProcedurePric,
        UpperBodyProcedurePric:state.LaserHairRemovalreducer.LaserHairRemoval.UpperBodyProcedurePric,
        FaceNeckProcedurePric:state.LaserHairRemovalreducer.LaserHairRemoval.FaceNeckProcedurePric,
        LowerBodyProcedurePric:state.LaserHairRemovalreducer.LaserHairRemoval.LowerBodyProcedurePric,
        FullBodyProcedurePric:state.LaserHairRemovalreducer.LaserHairRemoval.FullBodyProcedurePric,
        STPricNavbarDate:state.SkinTreatmentsreducer.SkinTreatments.PricNavbarDate,
        Microdermabrasion:state.SkinTreatmentsreducer.SkinTreatments.Microdermabrasion,
        Rejuvapen:state.SkinTreatmentsreducer.SkinTreatments.Rejuvapen,
        LEDlightTherapy:state.SkinTreatmentsreducer.SkinTreatments.LEDlightTherapy,
        HydraFacial:state.SkinTreatmentsreducer.SkinTreatments.HydraFacial,
        CosmeticGradePeels:state.SkinTreatmentsreducer.SkinTreatments.CosmeticGradePeels,
        text1:state.LaserHairRemovalreducer.LaserHairRemoval.InformationNet.text1,
        text2:state.LaserHairRemovalreducer.LaserHairRemoval.InformationNet.text2,
        text3:state.LaserHairRemovalreducer.LaserHairRemoval.InformationNet.text3,
        text4:state.LaserHairRemovalreducer.LaserHairRemoval.InformationNet.text4,
        Wimg1:state.LaserHairRemovalreducer.LaserHairRemoval.InformationNet.Wimg1,
        Wimg2:state.LaserHairRemovalreducer.LaserHairRemoval.InformationNet.Wimg2,
        Wimg3:state.LaserHairRemovalreducer.LaserHairRemoval.InformationNet.Wimg3,
        Mimg1:state.LaserHairRemovalreducer.LaserHairRemoval.InformationNet.Mimg1,
        Mimg2:state.LaserHairRemovalreducer.LaserHairRemoval.InformationNet.Mimg2,
        Mimg3:state.LaserHairRemovalreducer.LaserHairRemoval.InformationNet.Mimg3,
      }
  }
  let mapDispatchToProps=(dispatch) =>{
  return{
     follow:(ProcedureId,ProcedureClass,NavbarClass)=>{
       dispatch(followAC(ProcedureId,ProcedureClass,NavbarClass))
     },
     unfollow:(ProcedureId,ProcedureClass,NavbarClass)=>{
      dispatch(unfollowAC(ProcedureId,ProcedureClass,NavbarClass))
    }
  }
  }
  const ContentBlockConteiner=connect(mapStateToProps,mapDispatchToProps)(ContentBlock)
  export default ContentBlockConteiner;