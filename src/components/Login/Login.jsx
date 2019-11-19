import React from "react";
import { Field, reduxForm } from 'redux-form';
import { Input } from "../common/FormsControls/FormsControls";
import { required, maxLength30 } from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import css from "./../common/FormsControls/FormsControls.module.css"

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field name="email" placeholder="Email" component={Input} validate={[required, maxLength30]}/>
            <Field name="password" type="password" placeholder="Password" component={Input} validate={[required, maxLength30]}/>
            <Field name="rememberMe" type="checkbox" component={Input}/>remember me
            <div>
                {captchaUrl && <img src={captchaUrl}/>}
                {captchaUrl && <Field name="captcha"
                                      component={Input}
                                      placeholder="anti-bots symbols"
                                      validate={[required]}/>}
            </div>
            
            {error && <div className={css.formSummaryError}>{error}</div>} 
            <div><button>Login</button></div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Redirect to="/profile"/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}

const mapStateToProps = (state) => ({ 
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect( mapStateToProps, {login})(Login); //connect to store