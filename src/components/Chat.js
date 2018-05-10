import React from 'react'
import { database } from '../firebase'

import { mapObjectToArray } from '../utils'
import TextField from 'material-ui/TextField'
import RaiseButton from 'material-ui/RaisedButton'
import MenuItem from 'material-ui/MenuItem'
import moment from 'moment'


class Chat extends React.Component {
  state = {
    name: 'Paul \u00A9',
    newMessage: '',
    messages: null
  }

  componentDidMount() {
    database.ref('/chat').on('value', (snapshot) => {
      this.setState({
        messages: mapObjectToArray(snapshot.val()).reverse()
      })
    })
  }

  newMessageHendler = (e, value) => this.setState({ newMessage: value })

  addMessage = () => {
    database.ref('/chat').push({
      message: this.state.newMessage,
      user: this.state.name,
      timestamp: Date.now()
    }).then(() => this.setState({ newMessage: '' }))
  }

  render() {
    return (
      <div>
        <TextField
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
                  <MenuItem key={message.key}>
                    <span>
                      ({moment(message.timestamp).format('HH:mm')}) </span>
                    <b>{message.user}: </b>
                    <span>{message.message}</span>
                  </MenuItem>
                ))}
              </div>
          }
        </div>
      </div>
    )
  }
}

export default Chat