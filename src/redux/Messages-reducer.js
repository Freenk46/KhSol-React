const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
let initialState = {

  Dialog: [

  ],

}
const MessagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE: {
      let NewMessage = {
        Message: action.NewMessage,
      };
      return {
        ...state,
        Dialog: [...state.Dialog, { ...NewMessage }],
      };
    }
    default:
      return state;
  };
};
export const AddNewMessage = (NewMessage) => ({ type: ADD_NEW_MESSAGE, NewMessage });
export default MessagesReducer;