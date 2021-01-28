import React from 'react';
import s from './Friends.module.css'

const Friends = (props) => {
    return(
            <div className={s.photoFriends}>
                <img src="https://exclaim.ca/images/avatar_4.jpg" alt=""/>
                <span>{props.name}</span>
            </div>
    )
}

export default Friends;