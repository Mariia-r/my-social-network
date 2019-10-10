import React from "react";
import userPhoto from "../../assets/images/user.jpg";
import css from "./Users.module.css";
import {NavLink} from "react-router-dom";

const User = ({user, followingInProgress, follow, unfollow}) => {
    return (
        <div className={css.user}>
                <NavLink to={`/profile/` + user.id}>
                    <img 
                        src={user.photos.small != null 
                            ? user.photos.small 
                            : userPhoto
                            } 
                        alt="avaUser" className={css.userPhoto}
                    />
                </NavLink>
                <div>
                    {user.followed 
                        ? <button className={css.btnFollow}
                                  disabled={followingInProgress.some(id => id === user.id)} 
                                  onClick={() => {unfollow(user.id)}}>Unfollow</button> 
                        : <button className={css.btnFollow}
                                  disabled={followingInProgress.some(id => id === user.id)} 
                                  onClick={() => {follow(user.id)}}>Follow</button> 
                    }
                </div>
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