import {createSelector} from "reselect";

export const getUserState = (state) => {
    return state.usersPage.users;
}

export const getUserStateSuperSelector = createSelector(getUserState, (users) => {
    return users.filter(u => true);
})

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalCountUsers = (state) => {
    return state.usersPage.totalCountUsers
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}