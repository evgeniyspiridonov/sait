const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, { id: 6, message: body }]
            };
        default:
            return state;
    }
}
export const sendMesageCreator = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_MESSAGE_BODY, body: body })

export default dialogsReducer;