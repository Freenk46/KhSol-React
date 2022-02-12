import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import CosmeticInjections from '../CosmeticInjections/CosmeticInjections'
import { getCosmeticInjectionsPoster, getCosmeticInjectionsAbout, getCosmeticInjectionsColumnas } from '../../selectors/CosmeticInjections-selectors'

class CosmeticInjectionsConteiner extends PureComponent {
   render() {
      return <CosmeticInjections {...this.props} />
   }
}
let mapStateToProps = (state) => {
   return {

      Poster: getCosmeticInjectionsPoster(state),
      About: getCosmeticInjectionsAbout(state),
      Columnas: getCosmeticInjectionsColumnas(state),

   }
}
export default connect(mapStateToProps)(CosmeticInjectionsConteiner)