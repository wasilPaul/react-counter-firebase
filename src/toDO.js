import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'

class App extends Component {
  state = {
    newTask: '',
    tasks: null
  }

  newTaskHendler = (e, task) => {
    this.setState(
      {
        newTask: task,
      }
    )
  }

  componentDidMount() {
    this.loadTask()
  }

  loadTask = () => {
    fetch('https://jfddl4-sandbox.firebaseio.com/pwasil/tasks/.json')
      .then(e => e.json())
      .then(data => {
        const dataInArray = (Object.entries(data)
          .map(el => ({
            key: el[0],
            value: el[1]
          }))
        )
        this.setState({
          tasks: dataInArray
        })
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
      .then(this.loadTask)
    this.setState({ newTask: '' })
  }

  deleteTask = (taskUid) => {
    fetch(
      'https://jfddl4-sandbox.firebaseio.com/pwasil/tasks/' + taskUid +'/.json',
      {
        method: 'DELETE',
      }
    ).then(this.loadTask)
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

        {

          !this.state.tasks ?
            'Ladowanie ..........' :
            <ul>{
              this.state.tasks.map(
                task => <li 
                onClick={()=>this.deleteTask(task.key)}
                key={task.key}>{task.value} </li>
              )
            }
            </ul>
        }
      </div>
    )
  }
}

export default App;