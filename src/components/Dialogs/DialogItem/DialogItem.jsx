import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <img src="https://exclaim.ca/images/avatar_4.jpg" alt="avatar"/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}


export default DialogItem;