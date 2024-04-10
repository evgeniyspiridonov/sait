import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi how are you?', likesCount: 12 },
                { id: 2, message: 'It\'s my first post', likesCount: 55 },
                { id: 3, message: 'hi hi hi', likesCount: 5 },
                { id: 3, message: 'sisi', likesCount: 155 },
            ],
            newPostText: 'Specauto'
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Компания №1' },
                { id: 2, name: 'Компания №2' },
                { id: 3, name: 'Компания №3' },
                { id: 4, name: 'Компания №4' },
                { id: 5, name: 'Компания №5' },
                { id: 5, name: 'Компания №6' },
            ],
            messages: [
                { id: 1, message: 'HI' },
                { id: 2, message: 'How are you' },
                { id: 3, message: 'YO' },
                { id: 4, message: 'yes' },
                { id: 5, message: 'were are you from' },
                { id: 5, message: 'WTF' },
            ],
            newMessageBody: " "
        },
        sidebar: {},
    },
    _callSubscriber() {
        console.log('State  changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;
