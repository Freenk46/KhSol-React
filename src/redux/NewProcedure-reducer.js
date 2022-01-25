const ADD_ROCEDURE_CART = 'ADD_ROCEDURE_CART';
const CHANGE_NEW_ID = 'CHANGE_NEW_ID';
const DEL_NEW_PROCEDURE_CART = 'DEL_NEW_PROCEDURE_CART';
const BAY_NEW_ROCEDURE = 'BAY_NEW_ROCEDURE';
let initialState = {

  MyProcedure: [

  ],
  CartProcedure: [

  ],
  NewElementWhen: '12/07/2021 05:04 PM',
  QuantityCart: 0,
  totalpriceCart: 0,
  ProcedureChangeId: null,

}
const NewProcedureReducer = (state = initialState, action) => {
  var totalprice = 0;
  let id = [state.CartProcedure.length + 1];
  switch (action.type) {
    case BAY_NEW_ROCEDURE: {
      let stateCopy = { ...state };
      stateCopy.MyProcedure = [...state.MyProcedure];
      stateCopy.CartProcedure = [...state.CartProcedure];
      for (var m = 0; m < state.CartProcedure.length; m++) {
        let MyProcedure = {
          id: state.MyProcedure.length + 1,
          ProcedureName: state.CartProcedure[m].ProcedureName,
          ProcedureClass: state.CartProcedure[m].ProcedureClass,
          When: state.CartProcedure[m].When,
          Time: state.CartProcedure[m].Time,
          Price: state.CartProcedure[m].Price,
        };
        stateCopy.MyProcedure.push(MyProcedure);
      };
      while (stateCopy.CartProcedure.length) {
        stateCopy.CartProcedure.pop();
      }
      stateCopy.totalpriceCart = 0;
      stateCopy.QuantityCart = 0;
      return stateCopy;
    };
    case DEL_NEW_PROCEDURE_CART: {
      let id = state.ProcedureChangeId;
      var index = state.CartProcedure.map(x => {
        return x.id;
      }).indexOf(id);
      let stateCopy = { ...state };
      stateCopy.CartProcedure = [...state.CartProcedure];
      stateCopy.CartProcedure.splice(index, 1);
      for (var k = 0; k < stateCopy.CartProcedure.length; k++) {
        stateCopy.CartProcedure[k].id = k + 1
      };
      for (var j = 0; j < stateCopy.CartProcedure.length; j++) {
        totalprice += state.CartProcedure[j].Price;
      };
      if (stateCopy.CartProcedure.length === 0) {
        id = 0
        totalprice = 0
      };
      stateCopy.totalpriceCart = totalprice;
      stateCopy.QuantityCart = id
      return stateCopy;
    }
    case ADD_ROCEDURE_CART: {
      totalprice = action.FormData.Price;
      for (var i = 0; i < state.CartProcedure.length; i++) {
        totalprice += state.CartProcedure[i].Price;
      }
      let NewProcedure = {
        id: id,
        ProcedureName: action.FormData.ProcedureName,
        ProcedureClass: action.FormData.ProcedureClass,
        When: 0,
        Time: action.FormData.Time,
        Price: action.FormData.Price,
      };
      return {
        ...state,
        totalpriceCart: totalprice,
        QuantityCart: id,
        CartProcedure: [...state.CartProcedure, { ...NewProcedure }],
      };
    };
    case CHANGE_NEW_ID: {
      return {
        ...state,
        ProcedureChangeId: action.id,
      }
    };
    default:
      return state;
  };
};
export const AddNewProcedureCart = (FormData) => ({ type: ADD_ROCEDURE_CART, FormData });
export const ChangeNewId = (id) => ({ type: CHANGE_NEW_ID, id });
export const DelNewProcedureCart = () => ({ type: DEL_NEW_PROCEDURE_CART });
export const BayNewProcedure = () => ({ type: BAY_NEW_ROCEDURE });
export default NewProcedureReducer;