import React from 'react'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostContainer from "./MyPost/MyPostContainer";

const Profile = (props) => {
    return <div>
        <ProfileInfo profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
        <MyPostContainer/>
    </div>
}

export default Profile;