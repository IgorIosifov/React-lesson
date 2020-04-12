import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {updateNewPostText} from "./redux/state";

const App = (props) => {

  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs'
                 render={ () => <Dialogs
                     dialogsPage={props.state.dialogsPage}
                     addMessage = {props.addMessage}
                     updateNewMessageText = {props.updateNewMessageText}
                 /> }/>

          <Route path='/profile'
                 render={ () => <Profile
                     profilePage={props.state.profilePage}
                     addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}/> }/>
        </div>
      </div>
  )
}

export default App;