import React from 'react';
import css from './Friends.module.css';

const Friends = (props) => {
    let friendsElements = props.sidebar.friends.map((friend, index)=> {
        return (
        <div key={index} className={css.friend}>
            <img src={friend.img} alt="ava2"/>
            <div>{friend.name}</div>
        </div>
        )
    });
    return (
      <div className={css.friends}>
          <h4>Friends</h4>
          {friendsElements}
      </div>
    );
}

export default Friends;
