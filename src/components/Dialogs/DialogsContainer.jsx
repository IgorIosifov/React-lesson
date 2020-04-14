import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    };

    let onMessageChange = (message) => {
        props.store.dispatch(updateNewMessageTextActionCreator(message));
    };

    return <Dialogs updateNewMessageText ={onMessageChange} sendMessage={addMessage} dialogsPage={state}/>;

}

export default DialogsContainer;