import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hey, im first post", likesCount: 11},
                {id: 2, message: "Hey, im second post", likesCount: 12}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Andrey"},
                {id: 3, name: "Sveta"},
                {id: 4, name: "Sasha"},
                {id: 5, name: "Viktor"},
                {id: 6, name: "Valera"},

            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How is your it-kamasutra"},
                {id: 3, message: "Yo"},
                {id: 4, message: "Yeah, Yo"},
                {id: 5, message: "Yoooo"},
                {id: 6, message: "Yo-ho-ho"},
            ],
            newMessageText: ''
        },
        sidebar: {
            friends: [
                {id: 1, name: "Andrew"},
                {id: 2, name: "Sasha"},
                {id: 3, name: "Sveta"}]
        }
    },
    _callSubscriber() {
        console.log("Hi");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage,action);
        this._state.profilePage = profileReducer(this._state.profilePage,action,)
        this._state.sidebar = sidebarReducer(this._state.sidebar,action);
        this._callSubscriber(this._state);
    },

}

export default store;
window.store = store;