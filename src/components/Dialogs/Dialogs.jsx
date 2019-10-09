import React from 'react';
import css from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import { required, maxLength100 } from '../../utils/validators/validators';

const addMessageForm = (props) => {
    const {handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit}> 
            <Field 
                name="newMessageBody" 
                component={Textarea}
                placeholder="Write your message"
                validate={[required, maxLength100]}/>
            <button>Send Message</button>
        </form>)
}

const AddMessageReduxForm = reduxForm({form: "dialog"})(addMessageForm);


const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map((dialog, index)=>{
        return <DialogItem key={index} id={dialog.id} name={dialog.name} img={dialog.img}/>
    });

    let messagesElements = props.dialogsPage.messages.map((message, index)=>{
        return <Message key={index} id={message.id} message={message.message}/>
    });

    const onSubmit = (values) => {
        console.log(values.newMessageBody);
        props.sendMessage(values.newMessageBody);
        //dispatch thunk to store
    }

    return (
        <div className={css.dialogs}>
            <div className={css.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={css.messages}>
                <div>{messagesElements}</div>
                <div>
                  <div>
                      <AddMessageReduxForm onSubmit={onSubmit}/>
                  </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
