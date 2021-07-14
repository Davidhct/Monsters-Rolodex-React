import React, { Component } from "react";

import "./App.css";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };

    // this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json().then((users) => this.setState({ monsters: users }))
    );
  }

  handleChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    console.log(filteredMonsters);
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
