import React from 'react'
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friedns";


const Navbar = (props) => {
   let state = props.sidebar;

   let friendsElements = state.friends.map(f => <Friends key={f.id} name={f.name}/>);

   return <nav className={s.nav}>
      <div className={s.item}>
         <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
      </div>
      <div className={`${s.item}`}>
         <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
      </div>
      <div className={`${s.item}`}>
         <NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink>
      </div>
      <div className={s.item}>
         <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
      </div>
      <div className={s.item}>
         <NavLink to="/music" activeClassName={s.activeLink}>Music</NavLink>
      </div>
      <div className={s.item}>
         <NavLink to="/settings" activeClassName={s.activeLink}>Settings</NavLink>
      </div>
      <div className={s.friends}>
         <span>Friends</span>
         <div className={s.friendsEl}>
            {friendsElements}
         </div>


      </div>
   </nav>
}
export default Navbar;