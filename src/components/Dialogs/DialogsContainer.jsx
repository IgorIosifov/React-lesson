import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (body) => {
            dispatch(updateNewMessageTextActionCreator(body))
        },
        sendMessage: () => {
            dispatch(addMessageActionCreator());
        }

    };
};

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;