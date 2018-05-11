import React from 'react'
import { database, auth } from '../../firebase'
import { mapObjectToArray } from '../../utils'
import TextField from 'material-ui/TextField'
import RaiseButton from 'material-ui/RaisedButton'

import ChatAppBar from './ChatAppBar';
import Message from './Message'


class Chat extends React.Component {
  state = {
    newMessage: '',
    messages: null
  }

  componentDidMount() {
    database.ref('/chat').limitToLast(10).on('value', (snapshot) => {
      this.setState({
        messages: mapObjectToArray(snapshot.val()).reverse()
      })
    })
  }

  newMessageHendler = (e, value) => this.setState({ newMessage: value })

  addMessage = () => {
    const newRefForMEssage = database.ref('/chat').push()
    newRefForMEssage.set({
      message: this.state.newMessage,
      user: auth.currentUser.displayName,
      email: auth.currentUser.email,
      avatar: auth.currentUser.photoURL,
      timestamp: Date.now()
    }).then(() => this.setState({ newMessage: '' }))
  }

  render() {
    return (
      <div>
        <ChatAppBar/>
        <TextField
          name='message'
          onChange={this.newMessageHendler}
          value={this.state.newMessage}
          fullWidth={true}
        />
        <RaiseButton
          onClick={this.addMessage}
          label={'Send!'}
          secondary={true}
          fullWidth={true}
        />
        <div>
          {
            !this.state.messages ?
              'Ladowanie ..........' :
              <div>
                {this.state.messages.map(message => (
                  <Message 
                  key={message.key}
                  message={message}/>
                ))}
              </div>
          }
        </div>
      </div>
    )
  }
}

export default Chat