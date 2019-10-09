import React from 'react';
import css from './MyPosts.module.css';
import Post from '../MyPosts/Post/Post';
import { Field, reduxForm } from 'redux-form';
import { required, maxLength10 } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

const addPostForm = (props) => {
  const {handleSubmit} = props;
  return (
    <form onSubmit={handleSubmit}>
           <Field name="newPostText" 
                  component={Textarea} 
                  placeholder="Print your message"
                  validate={[required, maxLength10]}
                  />
        <button>Add post</button>
    </form>
  );
}

const AddPostReactForm = reduxForm({form: "post"})(addPostForm);

const MyPosts = (props) => {
    let postsElements = props.profilePage.posts.map((post, index) => {
      return <Post key={index} message={post.message} counter={post.likesCount}/>
    });

    let sendMessage = (values) => {
      props.addPost(values.newPostText);
    }

    return (
      <div className={css.postsBlock}>
        <h3>My posts</h3>
        <AddPostReactForm onSubmit={sendMessage}/>
        <div className={css.posts}>
          {postsElements}
        </div>
      </div>
    );
}

export default React.memo(MyPosts);
