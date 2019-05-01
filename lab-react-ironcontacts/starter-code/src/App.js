import React, { Component } from "react";
import contactsJSON from "./contacts.json";
import ContactsList from "./components/ContactsList";
import "./App.css";

class App extends Component {
  state = {
    contacts: contactsJSON.slice(0, 5)
  };

  handlePush = () => {
    let contactsCopy = [...this.state.contacts];
    let randomIdx = Math.floor(Math.random() * contactsJSON.length);
    let randomContact = contactsJSON[randomIdx];

    contactsCopy.push(randomContact);
    this.setState({
      contacts: contactsCopy
    });
  };

  handleSort = type => {
    let contactsCopy = this.state.contacts;

    if (type === "popularity") {
      contactsCopy.sort((a, b) => {
        return b[type] - a[type];
      });
    } else if (type === "name") {
      contactsCopy.sort((a, b) => {
        return a[type].localeCompare(b[type]);
      });
    }

    this.setState({
      contacts: contactsCopy
    });
  };

  deleteContact = index => {
    let contactsCopy = this.state.contacts;

    contactsCopy.splice(index, 1);

    this.setState({
      contacts: contactsCopy
    });
  };

  render() {
    return (
      <div className="App">
        <h1>IronContacts</h1>
        <button onClick={this.handlePush}>Add random contact</button>
        <button onClick={() => this.handleSort("name")}>Sort by Name</button>
        <button onClick={() => this.handleSort("popularity")}>
          Sort by Popularity
        </button>
        <ContactsList
          deleteContact={this.deleteContact}
          contacts={this.state.contacts}
        />
      </div>
    );
  }
}

export default App;
