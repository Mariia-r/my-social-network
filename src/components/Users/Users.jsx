import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = (props) => {
    return (
        <div>
            <Paginator 
                totalItemsCount = {props.totalUsersCount}
                pageSize = {props.pageSize} 
                currentPage = {props.currentPage} 
                onPageChanged = {props.onPageChanged}
            />
            {props.users.map((u) =>{
                return (<User key={u.id}
                              user={u} 
                              followingInProgress={props.followingInProgress}
                              follow = {props.follow}
                              unfollow={props.unfollow}
                        />)
            })
        }
        </div>  
    )
}

export default Users;