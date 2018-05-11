import React from 'react'
import LogInByGoogle from './LogInByGoogle';
import { auth, googleProvider } from '../../firebase'
import LoginByEmialAndPassword from './LoginByEmailandPassword';


class LoginForms extends React.Component {
  state = {
    logInEmail: '',
    logInPassword: ''
  }

  logInByGoogle = () => auth.signInWithPopup(googleProvider)

  logInByEmailAndPassword = () => auth.signInWithEmailAndPassword(
    this.state.logInEmail,
    this.state.logInPassword
  ).catch(e => alert('klklk'))

  onLogInEmailChange = (e, value) => this.setState({ logInEmail: value })
  onLogInPasswordChange = (e, value) => this.setState({ logInPassword: value })

  render() {
    return (
      <div>
        <LoginByEmialAndPassword
          emailValue={this.state.logInEmail}
          onEmailChange={this.onLogInEmailChange}
          passwordValue={this.state.logInPassword}
          onPasswordChnge={this.onLogInPasswordChange}
          onLogInClick={this.logInByEmailAndPassword}
        />
        <LogInByGoogle
          onLogInClick={this.logInByGoogle}
        />
      </div>
    )
  }
}

export default LoginForms