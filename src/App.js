
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';

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

  handleChange = e => {
    this.setState({searchField: e.target.value});
  }

  render() {

    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder='Search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
