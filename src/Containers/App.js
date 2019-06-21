import React, { Component } from 'react';
import './App.css';
import Nav from '../Components/Navigation/Nav';
import Family from '../Components/Family/Family';
import Addform from '../Components/AddFamily/Addfamily';
import About from '../Components/About/About';
import SearchBox from '../Components/Family/Search';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: "home",
      memlist: [],
      searchfield: ''
    }
  }

  onloadfetch = () => {
    fetch('https://git.heroku.com/arcane-brook-61004.git/family')
      .then(Response => {
        if (!Response.ok) {
          throw Response;
        }
        return Response.json()
      }).then(data => {
        this.setState({ memlist: JSON.parse(data) });
        return (console.log("hello"));
      }).catch(err => {
        console.log(err);
      });

  }

  onfamilyclick = (route) => {
    this.setState({ route: route });
    this.onloadfetch(route);
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }
  render() {
    const filtered = this.state.memlist.filter(member => {
      return member.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div >
        <Nav onfamilyclick={this.onfamilyclick} onloadfetch={this.onloadfetch} />
        {
          this.state.route === "home" ?
            (<About />) :
            (this.state.route === "family" ?
              (<div>
                <SearchBox onsearchchange={this.onSearchChange} />
                <Family memlist={filtered} />
              </div>) :
              (<Addform onfamilyclick={this.onfamilyclick} />))
        }
      </div>
    );
  }
}



export default App;
