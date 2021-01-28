import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Element} from "../common/FormControl/FormControl";


const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} id={m.id}/>);

    let OnAddMessage = (values) => {
        props.addMessage(values.newMessageText);
    }

    if (!props.isAuth) return <Redirect to={"/login"}/>
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
                <SendMessageFormRedux onSubmit={OnAddMessage}/>
            </div>

        </div>
    )
}
const maxLength100 = maxLengthCreator(100);
const Textarea = Element("textarea");

const SendMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.sendMessage}>
            <Field name="newMessageText"
                   validate={[required, maxLength100]} component={Textarea} className={s.textArea}/>
            <button className={s.btnClass}>Send message</button>
        </form>
    )
}

const SendMessageFormRedux = reduxForm({form: "sendMessageForm"})(SendMessageForm);
export default Dialogs;