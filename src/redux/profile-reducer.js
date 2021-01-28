import {profileAPI, userAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const DELETE_POST = "DELETE-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_USER_STATUS = "SET-USER-STATUS";

let initialState = {
    posts: [
        {id: 1, message: "Hey, im first post", likesCount: 11},
        {id: 2, message: "Hey, im second post", likesCount: 12}
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.addNewPostForm,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile,
            }
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status,
            }
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id != action.deletePostId)}
        default:
            return state;
    }
}
export const addPostActionCreator = (addNewPostForm) => ({type: ADD_POST, addNewPostForm});
export const deletePost = (deletePostId) => ({type: DELETE_POST, deletePostId});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await userAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
}

export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserStatus(userId);
    dispatch(setUserStatus(response.data));
}

export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateUserStatus(status);
    if (response.data.resultCode === 0)
        dispatch(setUserStatus(status));
}
export default profileReducer;