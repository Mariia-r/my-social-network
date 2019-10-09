import React from "react";
import userPhoto from "../../assets/images/user.jpg";
import css from "./Users.module.css";
import {NavLink} from "react-router-dom";
const User = ({user, followingInProgress, follow, unfollow}) => {
    return (
        <div>
                <NavLink to={`/profile/` + user.id}>
                    <img 
                        src={user.photos.small != null 
                            ? user.photos.small 
                            : userPhoto
                            } 
                        alt="avaUser" className={css.userPhoto}
                    />
                </NavLink>
                {user.followed 
                    ? <button disabled={followingInProgress.some(id => id === user.id)} 
                              onClick={() => {unfollow(user.id)}}>Unfollow</button> 
                    : <button disabled={followingInProgress.some(id => id === user.id)} 
                              onClick={() => {follow(user.id)}}>Follow</button> 
                }
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{"user.location.country"}</div>
                    <div>{"user.location.city"}</div>
                </span>
        </div>
    )
}

export default User;