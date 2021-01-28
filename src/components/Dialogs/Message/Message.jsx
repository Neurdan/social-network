import React from 'react';
import s from './../Dialogs.module.css';


const Message = (props) => {
    if (props.id % 2 != 0) {
        return (
            <div className={s.dialog}>
                <img src="https://exclaim.ca/images/avatar_4.jpg" alt=""/>
                <span>{props.message}</span>
            </div>
        )
    } else {
        return (<div className={s.dialog + ' ' + s.floating}>
            <img src="https://exclaim.ca/images/avatar_4.jpg" alt=""/>
            <span>{props.message}</span>
        </div>)
    }
}


export default Message;