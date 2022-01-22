import React from 'react';
import { connect } from 'react-redux'
import CosmeticInjections from '../CosmeticInjections/CosmeticInjections'


class CosmeticInjectionsConteiner extends React.Component {

   render() {
      return <CosmeticInjections {...this.props} />
   }
}
let mapStateToProps = (state) => {
   return {

      Poster: state.CosmeticInjectionsReducer.CosmeticInjections.Poster,
      About: state.CosmeticInjectionsReducer.CosmeticInjections.About,
      Columnas: state.CosmeticInjectionsReducer.CosmeticInjections.Columnas,

   }
}
export default connect(mapStateToProps)(CosmeticInjectionsConteiner)