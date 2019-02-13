import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Message from "./Components/Message/Message.js";
import "normalize.css";
import "./App.css";
import agentLogo from "./agent.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="main-header">
          <div className="main-header__svg-container">
            <img className="main-header__img" src={agentLogo} />
          </div>
          <h1 className="main-header__title"> Hello, World! </h1>
        </header>
        <section className="container">
          <Message message="Welcome to the ENIT Agent." />
        </section>
      </div>
    );
  }
}

export default hot(module)(App);
