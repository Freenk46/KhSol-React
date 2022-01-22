import Men from '../Men/Men'
import { connect } from 'react-redux'
import { AddNewProcedure, UpdateNewName, UpdateNewSurname, UpdateNewEmail, UpdateNewProcedureName, UpdateNewProcedureClass, UpdateNewNumber, UpdateNewGender } from '../../../../../redux/NewProcedure-reducer';
import { compose } from 'redux';
let mapStateToProps = (state) => {
   return {
      PathMen: state.LaserHairRemovalreducer.LaserHairRemoval.PathMen,
      PathWomen: state.LaserHairRemovalreducer.LaserHairRemoval.PathWomen,
      LHRPricNavbarDate: state.LaserHairRemovalreducer.LaserHairRemoval.PricNavbarData,
      MostPopularProcedurePric: state.LaserHairRemovalreducer.LaserHairRemoval.MostPopular,
      text1: state.LaserHairRemovalreducer.LaserHairRemoval.InformationNet.text1,
      text2: state.LaserHairRemovalreducer.LaserHairRemoval.InformationNet.text2,
      text3: state.LaserHairRemovalreducer.LaserHairRemoval.InformationNet.text3,
      text4: state.LaserHairRemovalreducer.LaserHairRemoval.InformationNet.text4,
      Mimg1: state.LaserHairRemovalreducer.LaserHairRemoval.InformationNet.Mimg1,
      Mimg2: state.LaserHairRemovalreducer.LaserHairRemoval.InformationNet.Mimg2,
      Mimg3: state.LaserHairRemovalreducer.LaserHairRemoval.InformationNet.Mimg3,
   }
}
const MenConteiner = compose(
   connect(mapStateToProps,
      {
         AddNewProcedure, UpdateNewName, UpdateNewSurname,
         UpdateNewEmail, UpdateNewProcedureName, UpdateNewProcedureClass,
         UpdateNewNumber, UpdateNewGender
      }),

)
   (Men)
export default MenConteiner;