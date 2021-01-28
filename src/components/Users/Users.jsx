import style from "./Users.module.css";
import userPhoto from "../../assets/images/userPhoto.png";
import React from "react";
import {NavLink} from "react-router-dom";


const Users = (props) => {

    let pagesCount = Math.ceil(props.totalCountUsers / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let activePage = props.currentPage;

    return <div>
        {/*Paginator-start*/}
        <div>
            {pages.map(p => {
                if ((p < activePage + 3 && p > activePage - 3) || p === 1 || p === pages.length)
                    return <button key={p} onClick={() => {
                        props.pageChanges(p)
                    }} className={props.currentPage === p ? style.selectedPage : undefined}>{p}</button>
            })}
        </div>
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