import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import SkinConcerns from './SkinConcerns';
import { getSkinConcernsPoster, getSkinConcernsAbout } from '../../../selectors/SkinConcerns-selectors'

class SkinConcernsConteiner extends PureComponent {
   render() {
      return <SkinConcerns {...this.props} />
   }
}
let mapStateToProps = (state) => {
   return {
      Poster: getSkinConcernsPoster(state),
      About: getSkinConcernsAbout(state),
   }
}
export default connect(mapStateToProps)(SkinConcernsConteiner)