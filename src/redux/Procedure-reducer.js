const ADD_ROCEDURE_CART = 'ADD_ROCEDURE_CART';
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
}
const ProcedureReducer = (state = initialState, action) => {
  var totalprice = 0;
  let id = [state.CartProcedure.length + 1];
  switch (action.type) {
    case BAY_NEW_ROCEDURE: {
      let stateCopy = { ...state };
      stateCopy.MyProcedure = [...state.MyProcedure];
      stateCopy.CartProcedure = [...state.CartProcedure];
      stateCopy.MyProcedure.push(...stateCopy.CartProcedure);
      while (stateCopy.CartProcedure.length) {
        stateCopy.CartProcedure.pop();
      }
      stateCopy.totalpriceCart = 0;
      stateCopy.QuantityCart = 0;
      return stateCopy;
    };
    case DEL_NEW_PROCEDURE_CART: {
      let id = action.id;
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
        if (stateCopy.CartProcedure.length === 0) {
          totalprice = 0
        }
        else
          totalprice += state.CartProcedure[j].Price;
      };
      stateCopy.totalpriceCart = totalprice;
      stateCopy.QuantityCart = stateCopy.CartProcedure.length;
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
        When: state.NewElementWhen,
        Price: action.FormData.Price,
        ClassId: action.FormData.ClassId,
        ProcedureId: action.FormData.ProcedureId,
      };
      return {
        ...state,
        totalpriceCart: totalprice,
        QuantityCart: id,
        CartProcedure: [...state.CartProcedure, { ...NewProcedure }],
      };
    };

    default:
      return state;
  };
};
export const AddNewProcedureCart = (FormData) => ({ type: ADD_ROCEDURE_CART, FormData });
export const DelNewProcedureCart = (id) => ({ type: DEL_NEW_PROCEDURE_CART, id });
export const BayNewProcedure = () => ({ type: BAY_NEW_ROCEDURE });

export default ProcedureReducer;