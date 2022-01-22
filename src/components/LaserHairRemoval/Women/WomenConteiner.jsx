import Women from '../Women/Women'
import { connect } from 'react-redux'
import { AddNewProcedure, UpdateNewName, UpdateNewSurname, UpdateNewEmail, UpdateNewProcedureName, UpdateNewProcedureClass, UpdateNewNumber, UpdateNewGender } from '../../../../../redux/NewProcedure-reducer';
import { withAuthRedirect } from '../../../../../hoc/withAuthRedirect';
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
      Wimg1: state.LaserHairRemovalreducer.LaserHairRemoval.InformationNet.Wimg1,
      Wimg2: state.LaserHairRemovalreducer.LaserHairRemoval.InformationNet.Wimg2,
      Wimg3: state.LaserHairRemovalreducer.LaserHairRemoval.InformationNet.Wimg3,
   }
}


const WomenConteiner = compose(
   connect(mapStateToProps,
      {
         AddNewProcedure, UpdateNewName, UpdateNewSurname,
         UpdateNewEmail, UpdateNewProcedureName, UpdateNewProcedureClass,
         UpdateNewNumber, UpdateNewGender
      }),
   withAuthRedirect
)
   (Women)
export default WomenConteiner;