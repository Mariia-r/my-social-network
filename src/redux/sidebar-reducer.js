let initialState = {
    friends: [
        {id: 1, name: "Valeriia", img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQApBPqJT-hMXEhfrV-jYsNCA0kGqEKw93h57b1Hl0wcLAed6vT6A'},
        {id: 2, name: "Dmytro", img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlwFafiVc6yFvJkc_M9cUOVB3cfnyBGiJ8-JblkbP3p1k57h7SBg'},
        {id: 3, name: "Irina", img: 'https://avatars.mds.yandex.net/get-pdb/1066918/1255a91d-7662-4baf-9d11-84a8b66f4d14/s1200'}
    ]
};

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;