import React from 'react'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {Element} from "../common/FormControl/FormControl";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "./../common/FormControl/FormControl.module.css"

const maxLengthForEmail100 = maxLengthCreator(100);
const maxLengthForPassword50 = maxLengthCreator(100);

const Input = Element("input");

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Email"} name={"email"} component={Input} validate={[required, maxLengthForEmail100]}/>
        </div>
        <div>
            <Field placeholder={"Password"} name={"password"} component={Input}
                   validate={[required, maxLengthForPassword50]} type={"password"}/>
        </div>
        <div>
            <Field component={Input} name={"rememberMe"} type={"checkbox"}/> rememberMe
        </div>
        {props.error && <div className={style.formSummaryError}>
            {props.error}
        </div>}
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) return <Redirect to={"/profile"}/>

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {login})(Login);