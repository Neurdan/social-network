import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import {ProfileStatusWithHook} from "./ProfileStatus/ProfileStatusWithHook";

const ProfileInfo = (props) => {
    if (!props.profile) return <Preloader/>
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt=""/>
                <ProfileStatusWithHook status={props.status} updateUserStatus={props.updateUserStatus}/>
            </div>
        </div>
    )
}

export default ProfileInfo;