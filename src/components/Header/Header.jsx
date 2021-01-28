import React from 'react'
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img src="https://i.pinimg.com/736x/da/d9/25/dad92566f312ac46341128b0720b48a3.jpg"></img>
        <div className={s.loginBlock}>
            {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>LogOut</button></div> :
                <NavLink to={"/login"}>Login</NavLink>}

        </div>
    </header>
}

export default Header;