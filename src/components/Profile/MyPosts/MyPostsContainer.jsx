import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";


const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let onAddPost = () => {
                    store.dispatch(addPostActionCreator());
                };

                let onPostChange = (text) => {
                    store.dispatch(updateNewPostTextActionCreator(text));
                };
                return <MyPosts
                    updateNewPostText={onPostChange}
                    addPost={onAddPost}
                    profilePage={store.getState().profilePage}
                    />
            }
            }
        </StoreContext.Consumer>)
}

export default MyPostsContainer;

// newPostText={store.getState().profilePage.newPostText}