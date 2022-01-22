const ADD_ROCEDURE_CART = 'ADD_ROCEDURE_CART';
const CHANGE_NEW_ID = 'CHANGE_NEW_ID';
const DEL_NEW_PROCEDURE_CART = 'DEL_NEW_PROCEDURE_CART';
const BAY_NEW_ROCEDURE = 'BAY_NEW_ROCEDURE';
let initialState = {
  NewProcedure: {
    MyProcedure: [

    ],
    CartProcedure: [

    ],
    NewElementWhen: '12/07/2021 05:04 PM',
    id: 0,
    Price: 0,
    ProcedureChangeId: null,
  },
}
const NewProcedureReducer = (state = initialState, action) => {
  var totalprice = 0;
  let id = [state.NewProcedure.CartProcedure.length + 1];
  switch (action.type) {
    case BAY_NEW_ROCEDURE: {
      let stateCopy = { ...state };
      stateCopy.NewProcedure.MyProcedure = [...state.NewProcedure.MyProcedure];
      stateCopy.NewProcedure.CartProcedure = [...state.NewProcedure.CartProcedure];
      for (var m = 0; m < state.NewProcedure.CartProcedure.length; m++) {
        let MyProcedure = {
          id: state.NewProcedure.MyProcedure.length + 1,
          ProcedureName: state.NewProcedure.CartProcedure[m].ProcedureName,
          ProcedureClass: state.NewProcedure.CartProcedure[m].ProcedureClass,
          When: state.NewProcedure.CartProcedure[m].When,
          Time: state.NewProcedure.CartProcedure[m].Time,
          Price: state.NewProcedure.CartProcedure[m].Price,
        };
        stateCopy.NewProcedure.MyProcedure.push(MyProcedure);
      };
      while (stateCopy.NewProcedure.CartProcedure.length) {
        stateCopy.NewProcedure.CartProcedure.pop();
      }
      stateCopy.NewProcedure.Price = 0;
      stateCopy.NewProcedure.id = 0;
      return state;
    };
    case DEL_NEW_PROCEDURE_CART: {
      let id = state.NewProcedure.ProcedureChangeId;
      var index = state.NewProcedure.CartProcedure.map(x => {
        return x.id;
      }).indexOf(id);
      let stateCopy = { ...state };
      stateCopy.NewProcedure.CartProcedure = [...state.NewProcedure.CartProcedure];
      stateCopy.NewProcedure.CartProcedure.splice(index, 1);
      for (var k = 0; k < stateCopy.NewProcedure.CartProcedure.length; k++) {
        stateCopy.NewProcedure.CartProcedure[k].id = k + 1
      };
      for (var j = 0; j < state.NewProcedure.CartProcedure.length; j++) {
        totalprice += state.NewProcedure.CartProcedure[j].Price;
      };
      if (state.NewProcedure.CartProcedure.length === 0) (
        id = 0
      );
      stateCopy.NewProcedure.Price = totalprice;
      stateCopy.NewProcedure.id = id
      return state;
    }
    case ADD_ROCEDURE_CART: {
      totalprice = action.FormData.Price;
      for (var i = 0; i < state.NewProcedure.CartProcedure.length; i++) {
        totalprice += state.NewProcedure.CartProcedure[i].Price;
      }
      let NewProcedure = {
        id: id,
        ProcedureName: action.FormData.ProcedureName,
        ProcedureClass: action.FormData.ProcedureClass,
        When: state.NewProcedure.NewElementWhen,
        Time: action.FormData.Time,
        Price: action.FormData.Price,
      };
      let stateCopy = { ...state };
      stateCopy.NewProcedure.CartProcedure = [...state.NewProcedure.CartProcedure];
      stateCopy.NewProcedure.CartProcedure.push(NewProcedure);
      stateCopy.NewProcedure.Price = totalprice
      stateCopy.NewProcedure.id = id
      return state;
    };
    case CHANGE_NEW_ID: {
      let stateCopy = { ...state };
      stateCopy.NewProcedure.ProcedureChangeId = action.id;
      return state;
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