import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Admin from './Admin';
import { getType, getClass } from '../../selectors/Procedure-selectors';

class AdminConteiner extends PureComponent {
   componentDidMount() {

   };
   render() {
      return (<Admin  {...this.props} />)
   };
};
let mapStateToProps = (state) => ({
   class: getClass(state),
   types: getType(state)
});
export default compose(
   connect(mapStateToProps
   ),

)
   (AdminConteiner)