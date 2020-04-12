let rerenderEntireTree = () => {
    console.log('state was changed');
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
            {id: 3, message: 'Blabla', likesCount: 11},
            {id: 4, message: 'Dada', likesCount: 11}
        ],
        newPostText: 'asdasdasd'
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Asd1'},
            {id: 4, message: 'Asd2'},
            {id: 5, message: 'Asd3'}
        ],
        newMessage: ''
    },
    sidebar: {}
};

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export const addMessage = () => {
    let newMessage = {
        id: 6,
        message: state.dialogsPage.newMessage
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessage = '';
    rerenderEntireTree(state);
};

export const updateNewMessageText = (newText) => {
    state.dialogsPage.newMessage = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) =>{
    rerenderEntireTree = observer;
};

export default state;