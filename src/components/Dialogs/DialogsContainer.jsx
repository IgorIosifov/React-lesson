import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let onSendMessageClick = () => {
                    store.dispatch(addMessageActionCreator());
                };

                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageTextActionCreator(body));
                };
                return <Dialogs
                    updateNewMessageText={onNewMessageChange}
                    sendMessage={onSendMessageClick}
                    dialogsPage={store.getState().dialogsPage}
                />
            }}
        </StoreContext.Consumer>)
}

export default DialogsContainer;