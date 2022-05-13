import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Admin from './Admin';
import { getType, getClass, getProcedure } from '../../selectors/Procedure-selectors';
import { getRoles } from '../../selectors/Users-selectors';

class AdminConteiner extends PureComponent {
   componentDidMount() {

   };
   render() {
      return (<Admin  {...this.props} />)
   };
};
let mapStateToProps = (state) => ({
   class: getClass(state),
   types: getType(state),
   procedures: getProcedure(state),
   roles: getRoles(state),
});
export default compose(
   connect(mapStateToProps
   ),

)
   (AdminConteiner)