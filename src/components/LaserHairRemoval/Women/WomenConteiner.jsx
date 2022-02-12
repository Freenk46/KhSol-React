import Women from './Women';
import React, { PureComponent } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { AddNewProcedureCart, } from '../../../redux/Procedure-reducer';
import { LaserProcedureIsBooked, setLaserProcedureindex } from '../../../redux/LaserHairRemoval-reducer';
import { getemail, getlogin, getid, getisAuth } from '../../../selectors/auth-selectors';
import { getLaserPricNavbarData, getLaserProcedures, getLaserPoster, getLaserAbout, getLaserNet, getLaserindex } from '../../../selectors/LaserHairRemoval-selectors';
class WomenConteiner extends PureComponent {
   componentDidMount() {
   }
   render() {
      return (<Women  {...this.props} />)
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
   (WomenConteiner)