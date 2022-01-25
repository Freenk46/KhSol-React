import React from 'react';
import { connect } from 'react-redux'
import LaserHairRemoval from './LaserHairRemoval';
import { getLaserHairRemovalPoster, getLaserHairRemovalAbout, } from '../../selectors/LaserHairRemoval-selectors'

class LaserHairRemovalConteiner extends React.Component {

   render() {
      return <LaserHairRemoval {...this.props} />
   }
}
let mapStateToProps = (state) => {
   return {
      Poster: getLaserHairRemovalPoster(state),
      About: getLaserHairRemovalAbout(state),
   }
}
export default connect(mapStateToProps)(LaserHairRemovalConteiner)