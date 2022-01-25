import React from 'react';
import { connect } from 'react-redux'
import SkinCare from './SkinCare';
import { getSkinCarePoster } from '../../selectors/SkinCare-selectors'

class SkinCareConteiner extends React.Component {

   render() {
      return <SkinCare {...this.props} />
   }
}
let mapStateToProps = (state) => {
   return {
      Poster: getSkinCarePoster(state),
   }
}
export default connect(mapStateToProps)(SkinCareConteiner)