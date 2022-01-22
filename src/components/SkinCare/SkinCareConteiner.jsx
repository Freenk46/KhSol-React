import React from 'react';
import { connect } from 'react-redux'
import SkinCare from './SkinCare';


class SkinCareConteiner extends React.Component {

   render() {
      return <SkinCare {...this.props} />
   }
}
let mapStateToProps = (state) => {
   return {
      Poster: state.SkinCareReducer.SkinCare.Poster,
   }
}
export default connect(mapStateToProps)(SkinCareConteiner)