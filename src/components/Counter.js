import React from 'react'
import { database } from '../firebase'

class Counter extends React.Component {
  state = {
    counter: 0
  }

  componentDidMount() {
    database.ref('/counter')    // metoda firebase zwraca referencje do danego miejsca
      .on(                      //once nasluchiwanie jednorazowe czy zmieniaa sie stan countera, on caly czas
        'value',                //jesli zmieni sie valu wyknaj funkcje
        (snapshot) => {
          this.setState({ counter: snapshot.val()})
        })
  }

  saveToOb = (data) => database.ref('/counter').set(data)
  
  render() {
    return (
      <div>
        <h1> {this.state.counter}</h1>
        <button onClick={() => this.saveToOb(this.state.counter - 1)}> - </button>
        <button onClick={() => this.saveToOb(this.state.counter + 1)}> + </button>
      </div >
    )
  }
}

export default Counter