import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

class App extends Component {
  state = {
    newTask: ''
  }

  newTaskHendler = (e, task) => {
    this.setState(
      {
        newTask: task
      }
    )
  }

  componentDidMount() {
    fetch('https://jfddl4-sandbox.firebaseio.com/pwasil/tasks/.json')
      .then(e => e.json())
      .then(data => {
        const dataInArray = (Object.entries(data)
          .map(el => ({
            key: el[0],
            value: el[1]
          }))
        )
        console.log(dataInArray)
      })
  }



  saveTask = () => {
    fetch(
      'https://jfddl4-sandbox.firebaseio.com/pwasil/tasks/.json',
      {
        method: 'POST',
        body: JSON.stringify(this.state.newTask)
      }

    )
    this.setState({ newTask: '' })
  }

  render() {
    return (
      <div>
        <TextField
          value={this.state.newTask}
          onChange={this.newTaskHendler}
          name='Text'
        />
        <br />
        <RaisedButton
          label={'Add Task'}
          onClick={this.saveTask}
        />
      </div>
    )
  }
}

export default App;