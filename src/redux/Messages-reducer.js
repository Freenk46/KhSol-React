const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
let initialState = {
  Messages: {
    Dialog: [

    ],
  },
}
const MessagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE: {
      if (action.NewMessage !== '') {
        let NewMessage = {
          Message: action.NewMessage,
        };
        let stateCopy = { ...state };
        stateCopy.Messages.Dialog = [...state.Messages.Dialog];
        stateCopy.Messages.Dialog.push(NewMessage);
        return state;
      } else
        return state;
    }
    default:
      return state;
  };
};
export const AddNewMessage = (NewMessage) => ({ type: ADD_NEW_MESSAGE, NewMessage });
export default MessagesReducer;