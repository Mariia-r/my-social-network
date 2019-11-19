import React from "react";
import { Field, reduxForm } from 'redux-form';
import { Input, Textarea } from "../../common/FormsControls/FormsControls";
import css from './ProfileInfo.module.css';
import style from "../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return (
    <form onSubmit={handleSubmit}>
         <div>
            <i>Full Name</i>
            <Field name="fullName"
                   component={Input}/>
        </div>     
        <div>
            <i>Looking for a job:</i>
            <Field name="lookingForAJob"
                   type="checkbox"
                   component={Input}/>
        </div>     
        <div>
            <i>Professional skills:</i>
            <Field placeholder="Professional skills"
                   name="lookingForAJobDescription"
                   component={Textarea}/>
        </div>
        <div>
        <i>About me:</i>
            <Field placeholder="About me"
                   name="aboutMe"
                   component={Textarea}/>
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return (
                    <div key={key} className={css.contacts}>
                        <i>{key}:</i>
                        <Field placeholder={key} name={`contacts.${key}`} component={Input}/>
                    </div>
                ) 
           })}
        </div>
        {error && <div className={style.formSummaryError}>{error}</div>} 
        <div> <button>Save</button> </div>
    </form>
    )
}

const ProfileDataReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataReduxForm;