const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
    dialogs: [
        {id: 1, name: "Valeriia", img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQApBPqJT-hMXEhfrV-jYsNCA0kGqEKw93h57b1Hl0wcLAed6vT6A'},
        {id: 2, name: "Irina", img: 'https://avatars.mds.yandex.net/get-pdb/1066918/1255a91d-7662-4baf-9d11-84a8b66f4d14/s1200'},
        {id: 3, name: "Dmytro", img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlwFafiVc6yFvJkc_M9cUOVB3cfnyBGiJ8-JblkbP3p1k57h7SBg'},
    ],
    messages: [
        {id: 1, message: "Like you"},
        {id: 2, message: "We are going"},
        {id: 3, message: "Let's go"},
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
                let body = action.newMessageBody;
                let newMessage = {id: 4, message: body}

                return {
                    ...state,
                    messages: [...state.messages, newMessage]
                }
        }

        default:
                return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;