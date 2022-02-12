import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import LaserHairRemoval from './LaserHairRemoval';
import { getemail, getlogin, getid, getisAuth } from '../../selectors/auth-selectors'
import { getLaserPricNavbarData, getLaserProcedures, getLaserPoster, getLaserAbout, getLaserNet } from '../../selectors/LaserHairRemoval-selectors'
class LaserHairRemovalConteiner extends PureComponent {
   render() {
      return <LaserHairRemoval {...this.props} />
   }
}
let mapStateToProps = (state) => {
   return {
      LHRricNavbarData: getLaserPricNavbarData(state),
      LaserProcedures: getLaserProcedures(state),
      email: getemail(state),
      login: getlogin(state),
      id: getid(state),
      isAuth: getisAuth(state),
      Poster: getLaserPoster(state),
      About: getLaserAbout(state),
      Net: getLaserNet(state),
   }
}
export default connect(mapStateToProps)(LaserHairRemovalConteiner)