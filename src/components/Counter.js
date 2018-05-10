import React from 'react'
import { database } from '../firebase'

class Counter extends React.Component {
    state = {
        counter: 0
    }

    componentDidMount() {
        database.ref('/counter')    // metoda firebase zwraca referencje do danego miejsca
            .on(                      //once nasluchiwanie jednorazowe czy zmieniaa sie stan countera
                'value',                //jesli zmieni sie valu wyknaj funkcje
                (snapshot) => {
                    this.setState({
                        counter: snapshot.val()
                    })})

    }


    render() {

        return (

            <div>
                <h1> {this.state.counter}</h1>
                <button onClick={this.oddFunction}> - </button>
                <button onClick={this.addFunction}> + </button>
            </div >
        )
    }

}

export default Counter