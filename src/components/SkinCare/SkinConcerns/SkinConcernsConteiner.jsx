import React from 'react';
import { connect } from 'react-redux'
import SkinConcerns from './SkinConcerns';


class SkinConcernsConteiner extends React.Component {

   render() {
      return <SkinConcerns {...this.props} />
   }
}
let mapStateToProps = (state) => {
   return {
      Poster: state.SkinConcernsReducer.SkinConcerns.Poster,
      About: state.SkinConcernsReducer.SkinConcerns.About,
   }
}
export default connect(mapStateToProps)(SkinConcernsConteiner)