import React, { Component } from 'react'


class App extends Component {
  state = {
    counter: 0,
  }

  componentDidMount() {
    fetch('https://jfddl4-sandbox.firebaseio.com/pwasil/counter/.json')
      .then(re => re.json())
      .then(actualCounterValFromDb => this.setState({ counter: actualCounterValFromDb }))
  }

  decHandler = () => this.setState({ counter: this.state.counter + 1 }, this.saveToDb)
  incHandler = () => this.setState({ counter: this.state.counter - 1 }, this.saveToDb)

  saveToDb = () => fetch(
    'https://jfddl4-sandbox.firebaseio.com/pwasil/counter/.json',
    {
      method: 'PUT',
      body: JSON.stringify(this.state.counter)
    })

  readFromDb = () => fetch(
    'https://jfddl4-sandbox.firebaseio.com/pwasil/counter/.json',
    {
      method: 'PUT',
      body: JSON.stringify(this.state.counter)
    })




  render() {
    return (
      <div >
        <h1>{this.state.counter}</h1>
        <button onClick={this.incHandler}>-</button>
        <button onClick={this.decHandler}>+</button>
      </div>
    )
  }
}



export default App




