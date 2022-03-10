import Men from './Men';
import React, { PureComponent } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { AddNewProcedureCart, } from '../../../redux/Procedure-reducer';
import { LaserProcedureIsBooked, setLaserProcedureindex } from '../../../redux/LaserHairRemoval-reducer';
import { getemail, getlogin, getid, getisAuth } from '../../../selectors/auth-selectors';
import { getLaserPricNavbarData, getLaserProcedures, getLaserPoster, getLaserAbout, getLaserNet, getLaserindex, getMenGenderId } from '../../../selectors/LaserHairRemoval-selectors';
class MenConteiner extends PureComponent {
   componentDidMount() {
   }
   render() {
      return (<Men  {...this.props} />)
   }
}
let mapStateToProps = (state) => {
   return {
      LHRPricNavbarData: getLaserPricNavbarData(state),
      LaserProcedures: getLaserProcedures(state),
      email: getemail(state),
      login: getlogin(state),
      id: getid(state),
      isAuth: getisAuth(state),
      Poster: getLaserPoster(state),
      About: getLaserAbout(state),
      Net: getLaserNet(state),
      index: getLaserindex(state),
      GenderId: getMenGenderId(state)

   }
}
export default compose(
   connect(mapStateToProps,
      {
         LaserProcedureIsBooked,
         AddNewProcedureCart,
         setLaserProcedureindex
      }
   ),
)
   (MenConteiner)