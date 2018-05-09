import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

class App extends Component {
  state = {
    text: null
  }

  componentDidMount() {
    fetch('https://jfddl4-sandbox.firebaseio.com/pwasil/text/.json')
      .then(response => response.json())
      .then(text => this.setState({ text }))
  }

  saveToDb = () => fetch(
    'https://jfddl4-sandbox.firebaseio.com/pwasil/text/.json',
    {
      method: 'PUT',
      body: JSON.stringify(this.state.text)
    }
  )

  render() {
    const isLoading = this.state.text === null

    return (
      <div>
        <TextField
          disabled={isLoading}
          value={isLoading ? 'Ładowanie...' : this.state.text}
          onChange={(e, val) => this.setState({ text: val })}
        />
        <RaisedButton
          disabled={isLoading}
          label={'SAVE!'}
          onClick={this.saveToDb}
        />
      </div>
    )
  }
}

export default App;