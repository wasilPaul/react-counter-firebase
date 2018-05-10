import React from 'react'

class App extends React.Component {
    state = {
        counter: null
    }

    componentDidMount() {
        fetch('https://jfddl4-sandbox.firebaseio.com/pwasil/counter/.json')
            .then(r => r.json())
            .then(actualCounter => this.setState({ counter: actualCounter }))
    }

    addFunction = () => this.setState({ counter: this.state.counter + 1 }, this.save)
    oddFunction = () => this.setState({ counter: this.state.counter - 1}, this.save)

    save = () => fetch(
        'https://jfddl4-sandbox.firebaseio.com/pwasil/counter/.json',
        {
            method: 'PUT',
            body: JSON.stringify(this.state.counter)
        })

   
    render() {

        return (

            <div>
                <h1> {this.state.counter === null ? 'Ladowanie ...' : this.state.counter}</h1>
                <button onClick={this.oddFunction}> - </button>
                <button onClick={this.addFunction}> + </button>
            </div >
        )
    }

}

export default App