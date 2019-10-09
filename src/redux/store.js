import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi", likesCount: 3},
                {id: 2, message: "How are yoU", likesCount: 3},
                {id: 3, message: "Nice day", likesCount: 3},
            ],
            newPostText: "Text"
        },
        
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Valeriia", img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQApBPqJT-hMXEhfrV-jYsNCA0kGqEKw93h57b1Hl0wcLAed6vT6A'},
                {id: 2, name: "Irina", img: 'https://avatars.mds.yandex.net/get-pdb/1066918/1255a91d-7662-4baf-9d11-84a8b66f4d14/s1200'},
                {id: 3, name: "Dmytro", img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlwFafiVc6yFvJkc_M9cUOVB3cfnyBGiJ8-JblkbP3p1k57h7SBg'},
            ],
            messages: [
                {id: 1, message: "Like you"},
                {id: 2, message: "We are going"},
                {id: 3, message: "Let's go"},
            ],
            newMessageBody: ""
        },
    
        sidebar: {
            friends: [
                {id: 1, name: "Valeriia", img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQApBPqJT-hMXEhfrV-jYsNCA0kGqEKw93h57b1Hl0wcLAed6vT6A'},
                {id: 2, name: "Dmytro", img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlwFafiVc6yFvJkc_M9cUOVB3cfnyBGiJ8-JblkbP3p1k57h7SBg'},
                {id: 3, name: "Irina", img: 'https://avatars.mds.yandex.net/get-pdb/1066918/1255a91d-7662-4baf-9d11-84a8b66f4d14/s1200'}
            ]
        }
    },

    _callSubscriber() {
        console.log('state changed');
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