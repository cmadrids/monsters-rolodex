
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super(); // Calls the Component constructor to give us access to its functionality

    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users') // returns a promise
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  render() {
    return (
      <div className="app">
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
