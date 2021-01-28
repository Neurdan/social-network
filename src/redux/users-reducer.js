import {userAPI} from "../api/api";

const TOGGLE_FOLLOW = "TOGGLE-FOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_TOTAL_COUNT_PAGE = "SET-TOTAL-COUNT-PAGE";
const SET_IS_FETCHING = "SET-IS-FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE-IS-FOLLOWING-PROGRESS";


let initialState = {
    users: [],
    currentPage: 1,
    totalCountUsers: 0,
    pageSize: 5,
    isFetching: true,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId)
                        return {...u, followed: !u.followed}
                    return u;
                })
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_COUNT_PAGE: {
            return {...state, totalCountUsers: action.totalCountUsers}
        }
        case SET_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}
export const toggleFollow = (userId) => ({type: TOGGLE_FOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUserCount = (totalCountUsers) => ({type: SET_TOTAL_COUNT_PAGE, totalCountUsers});
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching});
export const setToggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});

export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(setCurrentPage(currentPage));
        dispatch(setIsFetching(true));
        let data = await userAPI.getUsers(currentPage, pageSize)

        dispatch(setIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUserCount(data.totalCount));
    }
}

const followUnfollowFlow = async (dispatch, userId, apiMethod) => {
    dispatch(setToggleFollowingProgress(true, userId));
    let data = await apiMethod(userId);
    if (data.resultCode === 0) {
        dispatch(toggleFollow(userId))
    }
    dispatch(setToggleFollowingProgress(false, userId));
}

export const follow = (userId) => {
    return async (dispatch) => {
        // dispatch(setToggleFollowingProgress(true, userId));
        // let data = await userAPI.follow(userId)
        // if (data.resultCode === 0) {
        //     dispatch(toggleFollow(userId))
        // }
        // dispatch(setToggleFollowingProgress(false, userId));

        followUnfollowFlow(dispatch, userId, userAPI.follow.bind(userAPI))
    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        // dispatch(setToggleFollowingProgress(true, userId));
        // let data = await userAPI.unFollow(userId)
        // if (data.resultCode === 0) {
        //     dispatch(toggleFollow(userId))
        // }
        // dispatch(setToggleFollowingProgress(false, userId));
        followUnfollowFlow(dispatch, userId, userAPI.unFollow.bind(userAPI))

    }
}

export default usersReducer;