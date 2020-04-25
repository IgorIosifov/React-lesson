import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />);


    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.sendMessage();
    };


    let onMessageChange = () => {
        let message = newMessageElement.current.value;
        props.updateNewMessageText(message);
    };

    if (!props.isAuth) return <Redirect to='/login'/>;

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