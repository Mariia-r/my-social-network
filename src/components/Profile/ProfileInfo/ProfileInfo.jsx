import React from 'react';
import css from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import lookingForAJob from "../../../assets/images/lookingForAJob.jpg";
import notLookingForAJob from "../../../assets/images/notLookingForAJob.png";
import ProfileStatusWithHooks from './ProfileStatusWithHook';
import userPhoto from "../../../assets/images/user.jpg";

const ProfileInfo = (props) => {
  if(!props.profile){
    return <Preloader/>
  }

  const onMainPhotoSelected = (e) => {
    if(e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  }

  return (
      <div>
        {/*<img className={css.screenImg} src="http://kofella.net/images/stories/vseokofe/kak-sdelat-risunok-na-kofe.jpg" alt="coffee"/>*/}
        <div className={css.descriptionBlock}>
          <p className={css.nameUser}>{props.profile.fullName}</p>
          <img src={props.profile.photos.large || userPhoto} alt="user" className={css.photoUser}/>
          {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}

          <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>

          <div className={css.blockAboutJob}>
            <p>Looking for a job:
              <img src={props.profile.lookingForAJob ? lookingForAJob : notLookingForAJob} 
                   alt={props.profile.lookingForAJob ? "Looking for a job" : "Don't looking for a job"}/>
            </p>
            <p>Description a job:</p>
            <p>{props.profile.lookingForAJobDescription}</p>
            <div className={css.contactsUser}>
              <p>{props.profile.contacts.instagram}</p>
              <p>{props.profile.contacts.github}</p>
            </div>

          </div>
        </div>
      </div>
  );
}

export default ProfileInfo;
