// create your App component here
import React from 'react'

class App extends React.Component {

    state = {
        astronauts: []
    }

    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json")
        .then(r => r.json())
        .then(({people}) => this.setState({ astronauts: people }))
    }

    render () {
        return (
            <div>
                {this.state.astronauts.map((personObj, id) => <h1 key={id}> {personObj.name }</h1>)}
            </div>
        )
    }

}

export default App
