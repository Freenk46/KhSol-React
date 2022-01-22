import React from 'react';
import { connect } from 'react-redux'
import Home from './Home';


class HomeConteiner extends React.Component {

   render() {
      return <Home {...this.props} />
   }
}
let mapStateToProps = (state) => {
   return {
      Poster: state.HomeReducer.Home.Poster,
      About: state.HomeReducer.Home.About,
   }
}
export default connect(mapStateToProps)(HomeConteiner)