import React from 'react'
import { auth } from '../../firebase'


class Auth extends React.Component {
  state = {
    isLoggedIn: false
  }

  componentDidMount() {
    auth.onAuthStateChanged(
      user => {
        if (user) {
          this.setState({ isLoggedIn: true })
        } else {
          this.setState({ isLoggedIn: false })
        }
      }
    )
  }

  render() {
    return (
      <div>
        {
          this.state.isLoggedIn ?
          this.props.children 
          :
          'Zaloguj sie!'
        }
      </div>
    )
  }
}

export default Auth