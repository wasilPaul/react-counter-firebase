import React from 'react'
import LogInByGoogle from './LogInByGoogle';
import { auth, googleProvider } from '../../firebase'


class LoginForms extends React.Component {
  logInByGoogle = () => auth.signInWithPopup(googleProvider)  
  
  render() {
    return (
      <div>
        <LogInByGoogle
          onLogInClick={this.logInByGoogle}
        />
      </div>
    )
  }
}

export default LoginForms