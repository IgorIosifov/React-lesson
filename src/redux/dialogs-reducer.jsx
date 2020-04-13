let ADD_MESSAGE = 'ADD-MESSAGE';
let UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: state.newMessage
            };
            state.messages.push(newMessage);
            state.newMessage = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessage = action.newText;
            return state;
        default: return state;
    }
};

export const addMessageActionCreator = () => ({
    type: ADD_MESSAGE
});

export const updateNewMessageTextActionCreator =(message) => ({
    type: UPDATE_NEW_MESSAGE_TEXT, newText: message
});

export default dialogsReducer;