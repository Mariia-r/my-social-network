import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx'
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx"

const Profile = ({profile, status, updateStatus}) => {
    return (
      <div>
        <ProfileInfo 
            profile={profile}
            status={status}
            updateStatus={updateStatus}/>
        <MyPostsContainer/>
      </div>
    );
}

export default Profile;
