import React from 'react';
import css from './Post.module.css';

const Post = (props) => {
    return (
        <div  className={css.item}>
            <img src="#" alt="post1"/>
            <div>{props.message}</div>
            <button className={css.like}></button><div>{props.counter}</div>    
        </div>
        
    );
}

export default Post;