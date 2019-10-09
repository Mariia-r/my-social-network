import React from 'react';
import css from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import lookingForAJob from "../../../assets/images/lookingForAJob.jpg";
import notLookingForAJob from "../../../assets/images/notLookingForAJob.png";
import ProfileStatusWithHooks from './ProfileStatusWithHook';

const ProfileInfo = (props) => {
  if(!props.profile){
    return <Preloader/>
  }

    return (
      <div>
        {/*<img className={css.screenImg} src="http://kofella.net/images/stories/vseokofe/kak-sdelat-risunok-na-kofe.jpg" alt="coffee"/>*/}
        <div className={css.descriptionBlock}>
          <img src={props.profile.photos.large} alt="user"/>
          <p>{props.profile.contacts.github}</p>
          <div className={css.blockAboutJob}>
            <p>Looking for a job:
              <img src={props.profile.lookingForAJob ? lookingForAJob : notLookingForAJob} 
                   alt={props.profile.lookingForAJob ? "Looking for a job" : "Don't looking for a job"}/>
            </p>
            <p>Description a job:</p>
            <p>{props.profile.lookingForAJobDescription}</p>
          </div>
          <p>{props.profile.fullName}</p>
          ava+description
          <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        </div>
      </div>
    );
}

export default ProfileInfo;
