import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    addMessageActionCreator,
    updateNewMessageTextActionCreator
} from "../../redux/state";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>);


    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    };


    let onMessageChange = () => {
        let message = newMessageElement.current.value;
        props.dispatch(updateNewMessageTextActionCreator(message));
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea onChange={onMessageChange} ref={newMessageElement} value={props.dialogsPage.newMessage}/>
                </div>
                <div>
                    <button onClick={addMessage}> send message</button>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;