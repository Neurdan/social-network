import {connect} from "react-redux";
import Users from "./Users";
import React from "react";
import Preloader from "../common/Preloader/Preloader";
import {follow, getUsers, setToggleFollowingProgress, toggleFollow, unfollow} from "../../redux/users-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalCountUsers,
    getUserState
} from "../../redux/users-selectors";

class UserComponents extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)
    }

    pageChanges = (pageNumber) => {
        let {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : <Users totalCountUsers={this.props.totalCountUsers}
                                                           pageSize={this.props.pageSize}
                                                           currentPage={this.props.currentPage}
                                                           users={this.props.users}
                                                           pageChanges={this.pageChanges}
                                                           followingInProgress={this.props.followingInProgress}
                                                           follow={this.props.follow}
                                                           unfollow={this.props.unfollow}


            />}

        </>

    }
}

let mapStateToProps = (state) => {
    return {
        users: getUserState(state),
        currentPage: getCurrentPage(state),
        totalCountUsers: getTotalCountUsers(state),
        pageSize: getPageSize(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),

    }
}

export default compose(
    connect(mapStateToProps, {
        toggleFollow,
        setToggleFollowingProgress,
        getUsers,
        follow,
        unfollow,
    }),
    withAuthRedirect
)(UserComponents);

