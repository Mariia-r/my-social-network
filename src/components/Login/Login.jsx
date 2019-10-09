import React from "react";
import { Field, reduxForm } from 'redux-form';
import { Input } from "../common/FormsControls/FormsControls";
import { required, maxLength10 } from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import css from "./../common/FormsControls/FormsControls.module.css"

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field name="email" placeholder="Email" component={Input} validate={[required, maxLength10]}/>
            <Field name="password" type="password" placeholder="Password" component={Input} validate={[required, maxLength10]}/>
            <Field name="rememberMe" type="checkbox" component={Input}/>remember me
            {error && <div className={css.formSummaryError}>{error}</div>} 
            <div><button>Login</button></div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
  })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Redirect to="/profile"/>
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({ 
    isAuth: state.auth.isAuth
})

export default connect( mapStateToProps, {login})(Login); //connect to store