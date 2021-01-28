import style from "./Users.module.css";
import userPhoto from "../../assets/images/userPhoto.png";
import React from "react";
import {NavLink} from "react-router-dom";
import Paginator from "../Paginator/Paginator";


const Users = (props) => {


    return <div>
        {/*Paginator-start*/}
        <Paginator totalCountUsers={props.totalCountUsers} pageSize={props.pageSize} currentPage={props.currentPage}
                   pageChanges={props.pageChanges} portionSize={10}/>
        {/*Paginator-end*/}

        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                 className={style.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            if (u.followed) {
                                props.unfollow(u.id);

                            } else {
                                props.follow(u.id);
                            }

                        }}>{u.followed ? "UnFollow" : "Follow"}</button>
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users