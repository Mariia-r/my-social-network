import React from 'react';
import css from './Post.module.css';

const Post = (props) => {
    return (
        <div  className={css.item}>
            <img src="#" alt="post1"/>
            <div>{props.message}</div>
            <p>like</p><p>{props.counter}</p>     
        </div>
        
    );
}

export default Post;