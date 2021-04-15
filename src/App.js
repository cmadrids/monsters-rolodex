
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super(); // Calls the Component constructor to give us access to its functionality

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users') // returns a promise
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  render() {

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="app">
        <input type="search" placeholder="Search monsters" onChange={e => 
            this.setState({searchField: e.target.value})
          } />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
