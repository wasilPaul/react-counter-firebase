import React from 'react'
import { TextField } from 'material-ui';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';
import PaperRefinder from '../../components/PaperRefined';

const LoginByEmialAndPassword = (props) => (
    <PaperRefinder centered='true'>
        <TextField
            name='email'
            type={'email'}
            value={props.emailValue}
            onChange={props.onEmailChange}
            fullWidth={true}
        />
        <TextField
            name='password'
            type={'password'}
            value={props.passwordValue}
            onChange={props.onPasswordChnge}
            fullWidth={true}
        />
        <RaisedButton
            label={'Login'}
            onClick={props.onLogInClick}
        />
    </PaperRefinder>
)

export default LoginByEmialAndPassword