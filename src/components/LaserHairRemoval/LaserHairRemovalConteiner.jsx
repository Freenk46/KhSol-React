import React from 'react';
import { connect } from 'react-redux'
import LaserHairRemoval from './LaserHairRemoval';

class LaserHairRemovalConteiner extends React.Component {

   render() {
      return <LaserHairRemoval {...this.props} />
   }
}
let mapStateToProps = (state) => {
   return {
      Poster: state.LaserHairRemovalreducer.LaserHairRemoval.Poster,
      About: state.LaserHairRemovalreducer.LaserHairRemoval.About,
   }
}
export default connect(mapStateToProps)(LaserHairRemovalConteiner)