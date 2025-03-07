import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer.jsx'
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx"

const Profile = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {
    return (
      <div>
        <ProfileInfo
            isOwner={isOwner}
            profile={profile}
            status={status}
            updateStatus={updateStatus}
            savePhoto={savePhoto}
            saveProfile={saveProfile}/>
        <MyPostsContainer/>
      </div>
    );
}

export default Profile;
