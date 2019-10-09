import { usersAPI } from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS= "SET_USERS";
const SET_CURRENT_PAGE= "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
    /*users: [
        {id: 1, 
         photoUrl:"https://www.biography.com/.image/t_share/MTE1ODA0OTcxODI4MjgyODkz/kate-winslet-9534599-1-402.jpg", 
         followed: false, 
         fullName: "Kate J", 
         status: "Super", 
         location: {country: "Canada", city: "Toronto"}
        },
        {id: 2, 
         photoUrl:"https://pbs.twimg.com/profile_images/1090123447454388224/-8cmjXxr_400x400.jpg", 
         followed: true, 
         fullName: "Djon K", 
         status: "I'm cool", 
         location: {country: "USA", city: "New York"}},
        {id: 3, 
         photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmBjnanjKrErQMShYUDe5T7ju7ZNMcgDlvxF0QtVDsbZbTJw7IlA", 
         followed: true, 
         fullName: "Mary Sue", 
         status: "Yes", 
         location: {country: "Poland", city: "Warsaw"}},
        {id: 4, 
         photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp502-dwPfxt6zbNkIVI89CizKxQV74dza0g0SXLZrU3O48lhayg", 
         followed: false, 
         fullName: "Li Me", 
         status: "You are my love", 
         location: {country: "Spain", city: "Barselona"}},
        {id: 5, 
         photoUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkLeOFakbUhpzHTbNDGby0o-xjEtZVUv9bEIk5ud9uId0xzXD9", 
         followed: false, 
         fullName: "Olya Dil", 
         status: "World", 
         location: {country: "Ukraine", city: "Kyiv"}}
    ],*/
};

const UsersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
            };
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }
        }
        case SET_USERS: {
            return {
                ...state, 
                users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching 
                    ? [...state.followingInProgress, action.userId]
                    : [state.followingInProgress.filter(id => id !== action.userId)]
            }
        }
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId}); 
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId});

export const requestUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        let data = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(toggleIsFetching(false));
        dispatch(setCurrentPage(currentPage));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
};


const followUnfollowFlow = async(dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));
        let data = await apiMethod(userId);

        if (data.resultCode === 0) {
            dispatch(actionCreator(userId));
        } 
        dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId) => {
    return async (dispatch) => {
        let apiMethod = usersAPI.follow.bind(usersAPI);
        let actionCreator = followSuccess;

        followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
    }
};

export const unfollow = (userId) => {
    return async (dispatch) => {
        let apiMethod = usersAPI.unfollow.bind(usersAPI);
        let actionCreator = unfollowSuccess;

        followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
    }
};

export default UsersReducer;